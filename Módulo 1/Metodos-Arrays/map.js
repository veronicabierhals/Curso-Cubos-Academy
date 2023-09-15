//percorre cada elemento de um array
//executa uma função callback
//para cada elemento do array
//retorna um novo array
//não altera o array original

const usuarios = [
    {nome: "Guido", sobrenome: "Cerqueira", idade: 31},
    {nome: "Daniel", sobrenome: "Lopes", idade: 29},
    {nome: "Vitor", sobrenome: "Vidal", idade: 28},
];

const novoArray = usuarios.map((usuario) => {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
        idade: usuario.idade
    }
});
console.log(novoArray);