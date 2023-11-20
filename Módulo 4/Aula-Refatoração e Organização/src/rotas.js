const express = require("express");
const rotas = express();

const filtroLogin = require("./intermediarios/filtroLogin");
const {
  cadastrarUsuario,
  verificarUsuario,
  atualizarUsuario,
} = require("./controladores/usuarios");
const { login } = require("./controladores/autenticacao");
const validarRequisicao = require("./intermediarios/validarRequisicao");
const usuarioSchema = require("./validacoes/usuarioSchema");
const loginSchema = require("./validacoes/loginSchema");

rotas.post("/usuarios", validarRequisicao(usuarioSchema), cadastrarUsuario);

rotas.post("/login", validarRequisicao(loginSchema), login);

rotas.use(filtroLogin);

rotas.get("/perfil", verificarUsuario);

rotas.put("/perfil", validarRequisicao(usuarioSchema), atualizarUsuario);

module.exports = rotas;
