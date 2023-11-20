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
    return res.status(500).json({mensagem: "Erro interno do Servidor!"    });
  }
};

module.exports = { cadastrarUsuario };
