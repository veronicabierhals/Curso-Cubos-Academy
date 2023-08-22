//cartão de consumo
//objeto com: Nome do cliente, Idade do cliente, Produtos consumidos
//cada produto (array que guarda varios objetos): Nome do produto, Preço unitário em centavos, Quantidade comprada
//colocar pelo menos 3 produtos

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

console.log(cartaoConsumo);