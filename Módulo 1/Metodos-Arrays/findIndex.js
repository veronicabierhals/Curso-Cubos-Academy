//encontra o índice do elemento dentro do array.
//retorna -1 se não encontrar

//exemplo 1 array de objetos
const carros = [
    {nome: "corola", marca:"toyota", ano:"2020", cor: "prata"},
    {nome: "argo", marca:"fiat", ano:"2021", cor: "preto"},
    {nome: "ranger", marca:"ford", ano:"2021", cor: "prata"},
    {nome: "hilux", marca:"toyota", ano:"2018", cor: "branco"},
];

const resultado = carros.findIndex((carro) => {
    return carro.nome === "ranger";
});

console.log(resultado); //2


//exemplo 2 - array de strings
const nomes = ["joao", "ana", "rodrigo" ];

const resultado2 = nomes.findIndex((nome) => {
    return nome === "ana";
});

console.log(resultado2); //1


//exemplo 3 - array de números
const numeros = [1, 2, 3, 4];

const resultado3 = numeros.findIndex((numero) => {
    return numero === 3;
});

console.log(resultado3); //2