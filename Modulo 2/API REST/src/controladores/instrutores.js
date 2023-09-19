let { instrutores, identificadorInstrutor } = require("../bancoDeDados");

const listarInstrutores = (req, res) => {
  return res.status(200).json(instrutores);
};

const obterInstrutor = (req, res) => {
  const { id } = req.params;

  //verifica se id existe
  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  //se instrutor não for encontrado entra na condição
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado." });
  }

  //se nao retorna
  return res.status(200).json(instrutor);
};

const cadastrarInstrutor = (req, res) => {
  const { nome, email, status } = req.body;

  //nome obrigatorio
  if (!nome) {
    return res.status(400).json({ mensagem: "O nome é obrigatório" });
  }

  //email obrigatorio
  if (!email) {
    return res.status(400).json({ mensagem: "O e-mail é obrigatório" });
  }

  //pega as informacoes
  const instrutor = {
    id: identificadorInstrutor++,
    nome,
    email,
    status: status ?? true,
  };

  //insere no array instrutores
  instrutores.push(instrutor);

  //retorna informando que add e imprime novo instrutor
  return res.status(201).json(instrutor);
};

const atualizarInstrutor = (req, res) => {
  const { id } = req.params;
  const { nome, email, status } = req.body;

  //nome obrigatorio
  if (!nome) {
    return res.status(400).json({ mensagem: "O nome é obrigatório" });
  }

  //email obrigatorio
  if (!email) {
    return res.status(400).json({ mensagem: "O e-mail é obrigatório" });
  }

  //verifica se instrutor existe
  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  //se instrutor não for encontrado entra na condição
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado." });
  }

  //se existir, não passa no if e sobreescreve o instrutor, atualiza os dados
  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;

  //retorna que deu certo
  return res.status(204).send();
};

const atualizarStatusInstrutor = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  //verifica se instrutor existe
  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  //se instrutor não for encontrado entra na condição
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado." });
  }

  //se existir, não passa no if e atualiza status
  instrutor.status = status;

  //retorna que deu certo
  return res.status(204).send();
};

const excluirInstrutor = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado" });
  }

  //pega todos os instrutores do array, menos o que quer excluir
  instrutores = instrutores.filter((instrutor) => {
    return instrutor.id !== Number(id); //sobreescreve o banco de dados
  });

  return res.status(204).send();
};

module.exports = {
  listarInstrutores,
  obterInstrutor,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarStatusInstrutor,
  excluirInstrutor,
};
