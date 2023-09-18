const professores = require ("../bancoDeDados")

const filtrarProfessores = ((req, res) => {
  //desestruturação
  const { stack } = req.query;
  let resultado = professores;

  console.log("cheguei no controlador de listagem do professor");

  //verifica todos os professores que tem a stack informada e retorna
  if (stack) {
    //req.query.stack -> stack
    resultado = professores.filter((professor) => {
      return professor.stack === stack;
    });
  }
  res.send(resultado);
})

const encontrarProfessor = ((req, res) => {
  //procura dentro do array professores o professor que tem o parâmetro informado na rota
  const professorEncontrado = professores.find((professor) => {
    return professor.id === Number(req.params.id); //Number transforma string em number
  });

  res.send(professorEncontrado);
})

module.exports = {
  filtrarProfessores,
  encontrarProfessor,
};
