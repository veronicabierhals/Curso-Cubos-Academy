const transportador = require('../email');
const compiladorHTML = require('../utils/compiladorHtml');

const usuario = {
  nome: 'Veronica Bierhals',
  email: 'veronicabierhals1@gmail.com',
  senha: '123abc',
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (usuario.email !== email) {
    return res.status(400).json({ mensagem: "E-mail ou senha inválidas" });
  }

  if (usuario.senha !== senha) {
    return res.status(400).json({ mensagem: "E-mail ou senha inválidas" });
  }

const html = await compiladorHTML(`./src/tamplates/login.html`, {
    nomeusuario: usuario.Nome
})

  transportador.sendMail({
    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
    to: `${usuario.nome} <${usuario.email}>`,
    subject: "Tentativa de login",
    //text: 'Integração verificada com sucesso'
    html,
  });

  return res.json({ mensagem: "login efetuado com sucesso" });
};

module.exports = login;