const express = require("express");
const roteadores = express();

const { listagemProdutos, vendas } = require("./controladores/vendas");


roteadores.get("/produtos", listagemProdutos);
roteadores.post("/produtos", vendas);

module.exports = roteadores;