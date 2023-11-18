const { Router } = require("express");
const validarCorpoRequisicao = require("./intermediarios/validarCorpoRequisicao");
const verificarExistenciaEmail = require("./intermediarios/verificarExistenciaEmail");
const { criarUsuario, editarUsuario } = require("./controladores/usuario");

const rotas = Router();

rotas.get("/", (req, res) => res.json({ mensagem: "olá mundo" }));

rotas.post(
  "/usuarios",
  validarCorpoRequisicao,
  verificarExistenciaEmail,
  criarUsuario
);

rotas.put("/usuarios", verificarExistenciaOutroUsuarioEmail, editarUsuario);

module.exports = rotas;
