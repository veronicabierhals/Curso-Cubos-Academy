//exemplo 1 - ordenação padrão com a tabela unicode

const array = [2, 4, 1, 20, 3, 43];
array.sort();

console.log(array); //[ 1, 2, 20, 3, 4, 43 ]

//exemplo 2 - ordenação com função callback
const array2 = [2, 4, 1, 20, 3, 43];
array2.sort((a, b) => {
    return a - b;
});
console.log(array2); //[ 1, 2, 3, 4, 20, 43 ]

//exemplo 3 - ordenação padrão com a tabela unicode
const numeros = [1, 30, 4, 5, 80, 34, 100, 256];

numeros.sort();
console.log(numeros); //[ 1, 100, 256, 30, 34, 4, 5, 80 ];