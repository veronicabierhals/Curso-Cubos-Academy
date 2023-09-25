const fs = require("fs/promises");

(async function(){
    const arquivoJson = await fs.readFile("teste.json");

    //transforma uma string json em arquivo válido para manipulação no codigo
    const pessoas = JSON.parse(arquivoJson);

    pessoas.push({nome: "Guido", idade: 31});

    //tranforma string JS em arquivo json
    const arrayJson = JSON.stringify(pessoas);

    console.log(arrayJson);
})();