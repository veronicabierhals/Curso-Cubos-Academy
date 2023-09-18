const express = require("express");
const { listagemCarros, encontrarCarros } = require("./Controladores/carros");
const { validarSenha } = require("./Intermediarios")

const app = express();

app.use(validarSenha);

app.get('/carros', listagemCarros);

app.get('/carros/:id', encontrarCarros);

app.listen(3000);