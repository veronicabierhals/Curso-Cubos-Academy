const { log } = require("console");
const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const texto = "tudo bem?";

  //escreve dentro de um arquivo -> caminho do arquivo, o que quer inserir
  //sobreescreve o conteúdo caso o arquivo já exista
  //se não existir, cria o arquivo com o conteúdo informado
  await fs.writeFile("./src/a.txt", texto);
  res.json("ok");
});

app.post("/", async (req, res) => {
  const { nome, idade } = req.body;

  try {
    //lê o arquivo
    const teste = await fs.readFile("./src/usuarios.json");

    //transforma em js
    const pessoas = JSON.parse(teste);

    pessoas.push({ nome, idade });

    //transforma em Json
    const pessoasStringify = JSON.stringify(pessoas);

    console.log(pessoasStringify);

    //escreve no arquivo
    await fs.writeFile("./src/usuarios.json", pessoasStringify);

    return res.json("pessoa cadastrada com sucesso");
  } catch (erro) {
    return res.json(`Deu erro: ${erro.message}`);
  } finally {
    console.log("Isso sempre será executado");
  }
});

app.listen(3000);
