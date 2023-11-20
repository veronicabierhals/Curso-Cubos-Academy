const bancoDeDados = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hash = process.env.JWT_HASH;

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(404).json({ mensagem: "É obrigatório e-mail e senha" });
  }

  try {
    const usuario = await bancoDeDados("usuarios").where({ email }).first();

    if (!usuario) {
      return res.status(404).json({ mensagem: "O usuario não foi encontrado" });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(400).json({ mensagem: "E-mail e senha não confere" });
    }

    const token = jwt.sign({ id: usuario.id }, hash, { expiresIn: "8h" });

    const { senha: _, ...dadosUsuario } = usuario;

    return res.status(200).json({
      usuario: dadosUsuario,
      token,
    });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor!" });
  }
};

module.exports = { login };
