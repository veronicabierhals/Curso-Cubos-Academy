// ordenação crescente simplificada
const numeros3 = [3, 20, 13, 50, 1, 4, 2];

numeros3.sort((primeiroElemento, segundoElemento) => {
   return primeiroElemento - segundoElemento;
});
console.log("crecente", numeros3); //[1,  2, 3, 4, 13, 20, 50];

// ordenação decrescente simplificada
const numeros4 = [3, 20, 13, 50, 1, 4, 2];

numeros4.sort((primeiroElemento, segundoElemento) => {
   return segundoElemento - primeiroElemento;
});
console.log("decrescente", numeros4); // [ 50, 20, 13, 4, 3,  2,  1 ];// [ 50, 20, 13, 4, 3,  2,  1 ];

//ordenação crescente
const numeros = [3, 20, 13, 50, 1, 4, 2];

numeros.sort((primeiroElemento, segundoElemento) => {
  if (primeiroElemento < segundoElemento) {
    //1º menor 2º
    return -1; //primeiro elemento antes do segundo
  }

  if (primeiroElemento > segundoElemento) {
    //1º maior 2º
    return 1; //segundo elemento antes do primeiro
  }

  return 0; //mantem a ordem
});
console.log("crecente", numeros); //[1,  2, 3, 4, 13, 20, 50];

//ordenação decrescente
const numeros2 = [3, 20, 13, 50, 1, 4, 2];

numeros2.sort((primeiroElemento, segundoElemento) => {
  if (primeiroElemento < segundoElemento) {
    //1º menor 2º
    return 1; //segundo elemento antes do primeiro
  }

  if (primeiroElemento > segundoElemento) {
    //1º maior 2º
    return -1; //primeiro elemento antes do segundo
  }

  return 0; //mantem a ordem
});
console.log("decrescente", numeros2); // [ 50, 20, 13, 4, 3,  2,  1 ];
