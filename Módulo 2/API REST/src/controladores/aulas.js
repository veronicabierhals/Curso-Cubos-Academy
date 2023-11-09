let { identificadorAula, instrutores, aulas } = require("../bancoDeDados");

const cadastrarAula = (req, res) => {
  const { idInstrutor } = req.params;
  const { titulo, descricao } = req.body;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "O instrutor não existe." });
  }

  //titulo obrigatorio
  if (!titulo) {
    return res.status(400).json({ mensagem: "O título é obrigatório" });
  }

  //descricao obrigatorio
  if (!descricao) {
    return res.status(400).json({ mensagem: "A descrição é obrigatória" });
  }

  const aula = {
    id: identificadorAula++,
    instrutor_id: Number(idInstrutor),
    titulo,
    descricao,
  };
  aulas.push(aula);

  return res.status(201).json(aula);
};

const listarAulas = (req, res) => {
  return res.status(200).json(aulas);
};

const obterAulas = (req, res) => {
  const { id } = req.params;
  const aula = aulas.find((aula) => {
    return aula.id === Number(id);
  });

  if (!aula) {
    return res.status(404).json({ mensagem: "Aula não encontrada" });
  }
  //retorna a aula encontrada
  return res.status(200).json(aula);
};

const obterAulasInstrutor = (req, res) => {
  const { idInstrutor } = req.params;

  //verifica se instrutoor existe
  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "O instrutor não existe." });
  }

  const aulasEncontradas = aulas.filter((aula) => {
    return aula.instrutor_id === Number(idInstrutor);
  });

  //retorna a aulas encontradas
  return res.status(200).json(aulasEncontradas);
};

module.exports = {
  cadastrarAula,
  listarAulas,
  obterAulas,
  obterAulasInstrutor
};
