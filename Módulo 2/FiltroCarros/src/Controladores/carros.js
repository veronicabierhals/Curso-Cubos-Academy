const arrayCarros = require("../bancoDeDados");

const listagemCarros = (req, res) => {
  //desestruturação
  const { marca, cor } = req.query;
  let resultado = arrayCarros;

  if (marca) {
    resultado = resultado.filter((carro) => {
      return carro.marca === marca;
    });
  }

  if (cor) {
    resultado = resultado.filter((carro) => {
      return carro.cor === cor;
    });
  }
  res.send(resultado);
};

const encontrarCarros = (req, res) => {
  const { id } = req.params;
  const carroEncontrado = arrayCarros.find((carro) => {
    return carro.id === Number(req.params.id);
  });

  res.send(carroEncontrado);
};

module.exports = {
  listagemCarros,
  encontrarCarros,
};
