//cartão de consumo

const produtosConsumidos = [{
    nomeProduto: "cerveja",
    precoUnitario: 1000,
    quantidade: 1
},
{
    nomeProduto: "hamburguer",
    precoUnitario: 3000,
    quantidade: 1
},
{
    nomeProduto: "agua",
    precoUnitario: 500,
    quantidade: 3
}];

const cartaoConsumo = {
    nomeCliente: "Aline",
    idade: "21",
    produtosConsumidos
};


let totaAPagar = 0;

//percorrer a lista de produtos
//para cada um fazer preço * quantidade

for (let produto of produtosConsumidos){ //produto é a propriedade dentro do objeto
    totaAPagar += (produto.precoUnitario * produto.quantidade);
    //aqui definimos a propriedade específica que queremos.
}

console.log(`Sr(a) ${cartaoConsumo.nomeCliente}, o total da sua conta é R$${(totaAPagar/100).toFixed(2)}.`)