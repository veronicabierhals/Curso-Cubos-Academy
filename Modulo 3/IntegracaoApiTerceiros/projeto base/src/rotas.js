const express = require('express')
const clientes = require('./controladores/clientes')
const produtos = require('./controladores/produtos')

const rotas = express()

rotas.get('/cliente', clientes.listar)
rotas.post('/cliente', clientes.cadastrar)

rotas.get('/produto', produtos.listar)
rotas.post('/produto', produtos.cadastrar)

module.exports = rotas