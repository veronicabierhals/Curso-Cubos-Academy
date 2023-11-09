require("dotenv").config();
const express = require("express");
const knex = require("knex")
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
    try {
      const carros = await knex("carros").select();
      console.log(knex("carros").select().toString());
      console.log('Resultado da consulta:', carros);
      return res.json(carros);
    } catch (error) {
      console.error('Erro na consulta:', error);
      return res.status(500).json({ mensagem: error.message });
    }
  });
  

const port = process.env.PORT || 3000;

//app.listen(process.env.PORT, () => {console.log(`Servidor em pé na porta ${process.env.PORT}`)})

app.listen(port, () => {
  console.log(`Servidor em pé na porta ${port}`);
});
