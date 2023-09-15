//declarar uma variável que armazena um objeto
//propriedades: nome, idade, altura, temCNH e apelidos
//print "José tem 30 anos, 1.73m de altura, possui CNH, também e os seguintes apelidos: -Jr -Juninho."


const pessoa = {
    nome: "Veronica",
    idade: 33,
    altura: 1.63,
    temCNH: false,
    apelidos: ["Ve", "Veve", "Veri"]
};

const textoCNH = pessoa.temCNH ? "possui" : "não possui";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, ${textoCNH} CNH, e tem os seguintes apelidos:`);

for (let apelido of pessoa.apelidos){ //percorrerá apenas a propriedade apelidos
console.log(`- ${apelido}`); //imprimirá todos os apelidos, independente de quantos tenham
}