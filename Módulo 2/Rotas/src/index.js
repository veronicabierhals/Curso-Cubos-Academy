const express = require("express");
const {
  filtrarProfessores,
  encontrarProfessor,
} = require("./Controladores/professores");

const app = express();

const primeiroIntermediario = (req, res, next) => {
  console.log("Passei no primeiro intemediario");
  next();
};

const segundoIntermediario = (req, res, next) => {
  console.log("Passei no segundo intemediario");
  next();
};

//funciona somente na rota que é chamado
const intermediarioDaRota = (req, res, next) => {
  console.log("Passei no intemediario da rota");
  next(); //passa para a próxima etapa
};

//intermediário independente - funciona em todas as rotas
//app.use(primeiroIntermediario);
//app.use(segundoIntermediario);

//localhost:3000/professores
//pode colocar mais de um intermediario na rota
//parâmetros rota, intermediario, controlador
app.get("/professores", intermediarioDaRota, filtrarProfessores);

//localhost:3000/professores/2
app.get("/professores/:id", encontrarProfessor);

app.listen(3000);
