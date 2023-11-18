const { usuarios } = require("../bancoDeDados");

const listarUsuario = async (req, res) => {
  return res.json(usuarios);
};

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha, idade, ativo } = req.body;
  try {
    const novoUsuario = {
      nome,
      email,
      senha,
      idade,
      ativo,
    };

    usuarios.push(novoUsuario);

    return res.status(201).json(novoUsuario);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ mensagem: error.message });
  }
};

module.exports = {
  listarUsuario,
  cadastrarUsuario,
};
