const express = require("express");
const {
  listar,
  obter,
  cadastrar,
  atualizar,
  excluir,
} = require("./controladores/usuarios");

const rotas = express();

rotas.get("/usuarios", listar);

rotas.get("/usuarios/:id", obter);

rotas.post("/usuarios", cadastrar);

rotas.put("/usuarios/:id", atualizar);

rotas.delete("/usuarios/:id", excluir);

module.exports = rotas;