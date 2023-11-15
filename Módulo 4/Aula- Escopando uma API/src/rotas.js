const express = require("express");
const usuarios = require("./controladores/usuarios");
const login = require("./controladores/login");
const verificarlogin = require('./filtros/verificarLogin')

const rotas = express();

rotas.post("/cadastro", usuarios.cadastrarUsuario);

rotas.post("/login", login);

rotas.use(verificarlogin);

rotas.get("/perfil", usuarios.obterPerfil);
rotas.put("/perfil", usuarios.atualizarPerfil);

module.exports = rotas;
