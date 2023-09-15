//cartão de consumo

const produtosConsumidos = [{
    nomeProduto: "cerveja",
    precoUnitário: 1000,
    quantidade: 1
},
{
    nomeProduto: "hamburguer",
    precoUnitário: 3000,
    quantidade: 1
},
{
    nomeProduto: "agua",
    precoUnitário: 500,
    quantidade: 1
}];

const cartaoConsumo = {
    nomeCliente: "Aline",
    idade: "21",
    produtosConsumidos
};

//imprimir nome cliente
console.log(cartaoConsumo.nomeCliente);

//imprimir idade do cliente
console.log(cartaoConsumo.idade);

//modificar a idade
cartaoConsumo.idade = 22;

//imprimir nova idade
console.log(cartaoConsumo.idade);

//imprimir nome 1º produto
console.log(produtosConsumidos[0].nomeProduto);

//imprimir preço último produto
console.log(produtosConsumidos[produtosConsumidos.length -1].precoUnitário);