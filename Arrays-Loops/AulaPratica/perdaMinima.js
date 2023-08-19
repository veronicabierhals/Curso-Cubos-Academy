const precos = [20, 15, 8, 2, 12] //prox 5 anos
//comprar preço[1] = 15 -> vender preço[4] = 12 -> prejuizo 3 (15-12 = 3)

//percorrer array
//verificar diferença minima entre os indices
//pega um indice e subtrai por cada um dos outros seguintes e retem a menor diferença
//indice [0] - indice [1] = guarda em uma variável
//indice [0] - indice [2] -> compara com variavel anterior
//se indice < variavel -> variavel = indice
//imprime a menor diferença

let variavel = Number.MAX_VALUE;

for (let compra = 0; compra < precos.length - 1; compra++){
    for (let venda = compra + 1; venda < precos.length; venda++){
        let perda = precos[compra] - precos[venda];
            if (perda > 0 && perda < variavel){
                variavel = perda
            }  
}
} console.log(variavel)