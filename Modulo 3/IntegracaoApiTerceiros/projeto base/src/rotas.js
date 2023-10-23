const express = require('express')
const clientes = require('./controladores/clientes')
const produtos = require('./controladores/produtos')
const { venda } = require('./controladores/vendas')


const rotas = express()

rotas.get('/cliente', clientes.listar)
rotas.post('/cliente', clientes.cadastrar)

rotas.get('/produto', produtos.listar)
rotas.post('/produto', produtos.cadastrar)

rotas.post('/venda', venda)

module.exports = rotas