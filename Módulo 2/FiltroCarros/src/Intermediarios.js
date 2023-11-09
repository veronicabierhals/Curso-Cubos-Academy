const validarSenha = (req, res, next) => {
  const { senha } = req.query;
  if (!senha) {
    return res.send("A senha não foi informada");
  }

  if (senha !== "carros123") {
    return res.send("A senha está incorreta.");
  } else {
    next();
  }
};

module.exports = {
    validarSenha
};
