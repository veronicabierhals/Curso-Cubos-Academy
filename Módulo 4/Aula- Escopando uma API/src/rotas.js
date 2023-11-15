const express = require("express");
const usuarios = require("./controladores/usuarios");
const { verificarlogin } = require("./filtros/verificarLogin");
const login = require("./controladores/login");

const rotas = express();

rotas.put("/cadastro", usuarios.cadastrarUsuario);

rotas.post("/login", login);

rotas.use(verificarlogin);

rotas.get("/perfil", usuarios.obterPerfil);
rotas.put("/perfil", usuarios.atualizarPerfil);

module.exports = rotas;
