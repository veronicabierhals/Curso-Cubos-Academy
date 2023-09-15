//declarar uma variável que armazena um objeto
//propriedades: nome, idade, altura, temCNH e apelidos
//print "José tem 30 anos, 1.73m de altura, possui CNH, também e os seguintes apelidos: -Jr -Juninho."

let textoCNH = "";

const pessoa = {
    nome: "Veronica",
    idade: 33,
    altura: 1.63,
    temCNH: false,
    apelidos: ["Ve", "Veve"]
}
if (pessoa.temCNH){
    textoCNH = "possui";
} else {
    textoCNH = "não possui";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, ${textoCNH} CNH, e tem os seguintes apelidos:
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`);