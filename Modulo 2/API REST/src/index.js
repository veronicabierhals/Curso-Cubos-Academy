const express = require("express");
const rotas = require("./rotas");
const app = express();

//para aceitar somente formatos json
app.use(express.json());

app.use(rotas);

app.listen(3000);