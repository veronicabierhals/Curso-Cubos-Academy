//comprar 5 ou mais produtos
//mais barato sai de graça
//imprimir valor total aplicando a promoção quando for 5 ou +

let precos = [100, 500, 100, 200, 50]; //em centavos

//percorrer array -> cada indice do array é um produto
//se array tiver 5 ou + itens
//verificar qual item é o mais barato e tirar da lista
//somar itens restantes
//se não tiver 5 itens ou mais, só somar o valor total dos itens
//imprimir soma total na tela

let valorCompra = 0;
let menorValor = Number.MAX_VALUE;

for (let item of precos){
    if (precos.length >= 5){
        if (item < menorValor){
            menorValor = item;
        }
    } valorCompra += item;
}
if (precos.length >= 5){
    valorCompra -= menorValor
    console.log(valorCompra);
} else {
    console.log(valorCompra);
}
