const usuarios = [
    {nome: "joao", idade: 23},
    {nome: "maria", idade: 18},
    {nome: "ana", idade: 30},
    {nome: "rodrigo", idade: 19},
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === "joao";
});
console.log(resultado); //{ nome: 'joao', idade: 23 }

//////

const nomes = ["joao", "ana", "jose"];
const resultado2 = nomes.find((nome) => {
    return nome === "joao";
});
console.log(resultado2); //joao