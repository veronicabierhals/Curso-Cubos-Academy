const intermediarioCadastrarUsuario = async (req, res, next) => {
  const { nome, email, senha } = req.body;
  if (!nome) {
    return res.status(400).json({ mensagem: "O campo nome é obrigatório" });
  }

  if (typeof nome !== "string") {
    return res
      .status(400)
      .json({ mensagem: "O campo nome precisa ser uma string" });
  }

  if (!email) {
    return res.status(400).json({ mensagem: "O campo e-mail é obrigatório" });
  }

  if (!senha) {
    return res.status(400).json({ mensagem: "O campo senha é obrigatório" });
  }

  if (senha.length < 5) {
    return res
      .status(400)
      .json({ mensagem: "O campo senha precisa ter no mínimo 5 caracteres" });
  }

  next();
};

module.exports = intermediarioCadastrarUsuario;
