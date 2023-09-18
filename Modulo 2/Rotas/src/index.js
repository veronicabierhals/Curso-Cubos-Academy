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

//intermediário independente
app.use(primeiroIntermediario);

//intermediário independente
app.use(segundoIntermediario);

//localhost:3000/professores
app.get("/professores", filtrarProfessores);

//localhost:3000/professores/2
app.get("/professores/:id", encontrarProfessor);

app.listen(3000);
