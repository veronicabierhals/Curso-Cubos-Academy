const express = require("express");
const { getCityFromZipcode, getPackageDescriptionNpm } = require("utils-playground");
const app = express();

app.get("/", async (req, res) => {
  const cidade = getCityFromZipcode("44380000");
  const cidade2 = getCityFromZipcode("41256250");

  //usar promisse all se uma tarefa não depender da outra
  //retorna todas as promessas resolvidas na ordem do array
  const promise = await Promise.all([cidade, cidade2]);

  // console.log(promise);

  //desestruturacao de array
  const [resposta1, resposta2] = promise;

  return res.send(`A cidade encontrada foi: ${resposta1} e ${resposta2}`);
});

app.get("/pacote/:nomepacote", async (req, res) => {
    const {nomepacote} = req.params;
    
    const descricaoPacote = await getPackageDescriptionNpm(nomepacote);

    return res.send(descricaoPacote);
})

app.listen(3000);
