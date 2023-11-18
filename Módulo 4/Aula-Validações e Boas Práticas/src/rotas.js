const express = require("express");
const { cadastrarUsuario, listarUsuario } = require("./controladores/usuarios");
const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const schemaUsuario = require("./validacoes/schemaUsuario");

const rotas = express();

rotas.get("/usuario", listarUsuario);


rotas.post(
  "/usuario",
  validarCorpoRequisicao(schemaUsuario),
  cadastrarUsuario
);


module.exports = rotas;
