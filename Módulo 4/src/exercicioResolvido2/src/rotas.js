const express = require("express");
const usuarios = require("./controladores/usuarios")

const rotas = express();

app.get("/usuarios", usuarios.listar );

app.get("/usuarios/:id", usuarios.obter);

app.post("/usuarios", usuarios.cadastrar);

app.put("/usuarios/:id", usuarios.atualizar);

app.delete("/usuarios/:id", usuarios.excluir);


app.listen(3000);