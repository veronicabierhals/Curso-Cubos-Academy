const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

//pega cada elemento do array e joga para um único array que está no acumulador

const arrayReduzido = array.reduce((acumulador, elementoAtual, indice, array) => {
    //...spread une todos os valores do array acumulador com o valor do elementoAtual
    return [...acumulador, ...elementoAtual];
}, []); //acumulador será um array vazio

console.log(arrayReduzido);