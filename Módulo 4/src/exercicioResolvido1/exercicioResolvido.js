const express = require("express");
const knex = require("../conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  /*
  const quantidadeMedicamentos = await knex("farmacia").count();
  return res.json(quantidadeMedicamentos);
  

  const usuarioMaisNovo = await knex('usuarios').min('idade').debug()
  return res.json(usuarioMaisNovo);


const somaCategoria = await knex('farmacia')
.select('categoria')
.sum('estoque')
.whereNotNull('categoria')
.groupBy('categoria')
.debug()
return res.json(somaCategoria);


const categoriaNull = await knex('farmacia').whereNull('categoria').count().debug();
return res.json(categoriaNull);


const quantidadeCategoria = await knex('farmacia')
.select('categoria')
.count()
.whereNotNull('categoria')
.groupBy('categoria')
.debug()
return res.json(quantidadeCategoria);
*/

const quantidadeUsuarios = await knex('usuarios')
.select('idade')
.count()
.where('idade', '>=', 18)
.groupBy('idade')
.debug()
return res.json(quantidadeUsuarios);

});
app.listen(3000);