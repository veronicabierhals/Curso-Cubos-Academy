/*
const opcoes = ["Eu", "você", "ele", "nós"];
const resultado = opcoes.slice(1,3);
console.log(resultado);
*/

//fazer uma função que, dado um determinado conjunto de dados, descarta os primeiros 10%
//e os últimos 10%, aproveitando apenas 80% centrais.

function filtrar80 (dados){
    const startIndex = Math.round(dados.length * 0.1); //10% /Math.round arredonda para o mais próximo
    const endIndex = Math.floor(dados.length * 0.9); //90% /Math.floor arredonda para baixo
    const fatia = dados.slice(startIndex, endIndex);
    console.log(fatia);
}
const dados = [0,1,5,7,10,33,55,60,57,85,45,68,49,57,89,69,57,33,24,11,5,3,1,0,0];

filtrar80(dados);