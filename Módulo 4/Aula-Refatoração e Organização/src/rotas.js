const express = require("express");
const rotas = express();

const bcrypt = require("bcrypt");
const bancoDeDados = require("./conexao");
const filtroLogin = require("./intermediarios/filtroLogin");
const { cadastrarUsuario } = require("./controladores/usuarios");
const { login } = require("./controladores/autenticacao");

rotas.post("/usuarios", cadastrarUsuario);

rotas.post("/login", login );

rotas.use(filtroLogin);

rotas.get("/perfil", async (req, res) => {
  return res.status(200).json(req.usuario);
});

rotas.put("/perfil", async (req, res) => {
  let { nome, email, senha, telefone } = req.body;
  const { id } = req.usuario;

  if (!nome && !email && !senha && !telefone) {
    return res
      .status(404)
      .json("É obrigatório informar ao menos um campo para atualização");
  }

  try {
    const usuarioExiste = await bancoDeDados("usuarios").where({ id }).first();

    if (!usuarioExiste) {
      return res.status(404).json("Usuario não encontrado");
    }

    if (senha) {
      senha = await bcrypt.hash(senha, 10);
    }

    if (email !== req.usuario.email) {
      const emailUsuarioExiste = await bancoDeDados("usuarios")
        .where({ email })
        .first();

      if (emailUsuarioExiste) {
        res.status(404).json("O Email já existe.");
        return;
      }
    }

    const usuarioAtualizado = await bancoDeDados("usuarios")
      .where({ id })
      .update({
        nome,
        email,
        senha,
        telefone,
      });

    if (!usuarioAtualizado) {
      return res.status(400).json("O usuario não foi atualizado");
    }

    res.status(200).json("Usuario foi atualizado com sucesso.");
    return;
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

module.exports = rotas;
