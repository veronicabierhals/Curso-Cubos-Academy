const express = require('express')
const axios = require('axios')

const app = express()

//coloca-se em um arquivo de configuração do Axios
const instanciaAxios = axios.create({
    baseURL: 'http://localhost:3001'
})

app.use(express.json())

/*
app.get('/', async (req, res) => {
    try {
        //res.json(`Olá da api 1. Porta 3000`)

    const resultadoAxios = await instanciaAxios.get('http://localhost:3001/carros')

    res.json(resultadoAxios.data)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
})
*/
app.get('/', async (req, res) => {

    const novoCarro = {
        modelo: 'celta',
        marca: 'chevrolet'
    }
    //aqui passa só o endpoint
    const resultadoAxios = await instanciaAxios.post('/carros', novoCarro)

    res.json(resultadoAxios.data)
})


app.listen(3000)