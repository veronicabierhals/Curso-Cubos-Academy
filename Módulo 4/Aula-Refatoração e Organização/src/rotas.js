const express = require("express");
const rotas = express();

const filtroLogin = require("./intermediarios/filtroLogin");
const {
  cadastrarUsuario,
  verificarUsuario,
  atualizarUsuario,
} = require("./controladores/usuarios");
const { login } = require("./controladores/autenticacao");

rotas.post("/usuarios", cadastrarUsuario);

rotas.post("/login", login);

rotas.use(filtroLogin);

rotas.get("/perfil", verificarUsuario);

rotas.put("/perfil", atualizarUsuario);

module.exports = rotas;
