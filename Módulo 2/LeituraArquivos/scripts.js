const fs = require("fs");

console.log("antes de ler");

//leitura de arquivos sincrono
//const a = fs.readFileSync("a.txt").toString();
//console.log(a);

//le o arquivo
fs.readFile("a.txt", (erro, data) => {
    //se encontrar erro
 if(erro){
    //imprime o erro
    console.log(erro);
 } else {
    //se não, passa a informação que está dentro do arquivo
    console.log(data.toString());
 }
});


console.log("depois de ler");
