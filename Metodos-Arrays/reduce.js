const array = [0, 1, 2, 3, 4];

//somou todos os números do array
array.reduce((acumulador, valorAtual, indice, array) => {
  return acumulador + valorAtual;
});

//como somar todos os numeros de um array usando for
let somaTotal = array[0];
for (let i = 1; i < array.length; i++) {
  const elementoAtual = array[i];

  somaTotal += elementoAtual;
}
console.log(somaTotal);

//neste caso os argumentos indice e array nao estao sendo utilizado
//então não precisa passar eles
const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
  return acumulador + elementoAtual;
});
console.log(valorReduce); //10


//passado um valor inicial para o acumulador
const valorReduce2 = array.reduce(
  (acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
  }, 10); //passado o valor do acumulador inicial

console.log(valorReduce2); //20