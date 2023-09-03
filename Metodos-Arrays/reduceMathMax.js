//localizar maior numero
const numeros2 = [1, 98, -76, 0, 12, 19, 5, 60, 44, 200];

const maiorNumero2 = numeros2.reduce((acumulador, elementoAtual) => {
  return Math.max(acumulador, elementoAtual);
});
console.log(maiorNumero2);

//localizar menor numero
const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 200];

const maiorNumero = numeros.reduce((acumulador, elementoAtual) => {
  return Math.min(acumulador, elementoAtual);
});
console.log(maiorNumero);