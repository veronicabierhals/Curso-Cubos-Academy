/*declarar uma variável que armazena um objeto contendo dados de uma pessoa
nome, idade, profissão, altura
fazer uma função com parâmetros que não retorne valores
função imprimir apresentação da pessoa
"Olá! Meu nome é João, sou um jovem de 12 anos, 1.4m de altura e sou estudante"
*/

const pessoa1 ={
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4,
};

function apresentar(pessoa){
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos,
    ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
};

apresentar(pessoa1);