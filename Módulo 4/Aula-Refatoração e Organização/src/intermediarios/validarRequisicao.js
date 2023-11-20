const validarRequisicao = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ mensagem: error.mensagem });
  }
};

module.exports = validarRequisicao;
