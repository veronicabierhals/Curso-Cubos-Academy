const bcrypt = require("bcrypt");
const bancoDeDados = require("../conexao");

const cadastrarUsuario = async (req, res) => {
  console.log("Dados da requisição:", req.body);
  const { nome, email, senha, telefone } = req.body;

  try {
    const usuarioEncontrado = await bancoDeDados("usuarios")
      .where({ email })
      .first();

    if (usuarioEncontrado) {
      return res.status(400).json({ mensagem: "O e-mail já existe" });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await bancoDeDados("usuarios")
      .insert({
        nome,
        email,
        senha: senhaCriptografada,
        telefone: telefone,
      })
      .returning("*");

    const { senha: _, ...usuarioCadastrado } = usuario[0];

    return res.status(201).json(usuarioCadastrado);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do Servidor!" });
  }
};

const verificarUsuario = async (req, res) => {
  return res.status(200).json(req.usuario);
};

const atualizarUsuario = async (req, res) => {
  const { nome, email, senha, telefone } = req.body;
  const { id } = req.usuario;

  try {
    const usuarioExiste = await bancoDeDados("usuarios").where({ id }).first();

    if (!usuarioExiste) {
      return res.status(404).json({ mensagem: "Usuario não encontrado" });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    if (email !== req.usuario.email) {
      const emailUsuarioExiste = await bancoDeDados("usuarios")
        .where({ email })
        .first();



      if (emailUsuarioExiste) {
        return res.status(400).json({ mensagem: "O e-mail já existe." });
      }
    }

    await bancoDeDados("usuarios").where({ id }).update({
      nome,
      email,
      senha: senhaCriptografada,
      telefone,
    });

    return res.status(204).send();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do Servidor!" });
  }
};

module.exports = { cadastrarUsuario, verificarUsuario, atualizarUsuario };
