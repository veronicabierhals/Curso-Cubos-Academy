const verificarExistenciaOutroUsuarioEmail = async (res, res, next) => {
  const { email } = req.body;
  const {idUsuarioLogado} = req.idUsuarioLogado;

  try {
    const comando = `SELECT * FROM usuarios WHERE email = $1 AND id != $2;`

    const valores = [email, idUsuarioLogado];

    const { rowCount: quantidadeEmailsCadastrados } = await bancoDeDados.query(
      comando,
      valores
    );

    if (quantidadeEmailsCadastrados !== 0) {
      return res.status(400).json({ mensagem: "E-mail inválido" });
    }
    return next();
  } catch (error) {
    return res.status(500).json("Erro interno do Servidor");
  }
}
