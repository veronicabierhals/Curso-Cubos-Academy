const bancoDeDados = require("../config/configuracaoBanco");

const verificarExistenciaEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const comando = `SELECT id FROM usuarios WHERE email = $1;`;

    const valores = [email];

    const { rowCount: quantidadeEmailsCadastrados } = await bancoDeDados.query(
      comando,
      valores
    );

    if (quantidadeEmailsCadastrados !== 0) {
      return res.status(400).json({ mensagem: "Usuário cadastrado" });
    }
    return next();
  } catch (error) {
    return res.status(500).json("Erro interno do Servidor");
  }
};

module.exports = verificarExistenciaEmail;
