const bcrypt = require("bcrypt");
const bancoDeDados = require("./conexao");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha, telefone } = req.body;

  if (!nome) {
    return res.status(404).json("O campo nome é obrigatório");
  }

  if (!email) {
    return res.status(404).json("O campo email é obrigatório");
  }

  if (!senha) {
    return res.status(404).json("O campo senha é obrigatório");
  }

  if (!telefone) {
    return res.status(404).json("O campo telefone é obrigatório");
  }

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
        telefone,
      })
      .returning("*");

    return res.status(201).json(usuario[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor!" });
  }
};

const verificarUsuario = async (req, res) => {
  return res.status(200).json(req.usuario);
};

const atualizarUsuario = async (req, res) => {
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
};

module.exports = { cadastrarUsuario, verificarUsuario, atualizarUsuario };
