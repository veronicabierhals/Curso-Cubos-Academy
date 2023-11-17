const express = require("express");
const { cadastrarUsuario, listarUsuario } = require("./controladores/usuarios");
const intermediarioCadastrarUsuario = require("./intermediarios/intermediarioCadastrarUsuario");

const rotas = express();

rotas.get("/usuario", listarUsuario)
rotas.post("/usuario", intermediarioCadastrarUsuario, cadastrarUsuario);

module.exports = rotas;
