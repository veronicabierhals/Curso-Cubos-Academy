const express = require("express");

const { listagemCarros, encontrarCarros } = require("./Controladores/carros");

const app = express();

app.get('/carros', listagemCarros);

app.get('/carros/:id', encontrarCarros);

app.listen(3000);