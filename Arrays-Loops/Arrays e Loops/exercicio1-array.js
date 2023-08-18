const paises = ['Brasil', 'China', 'Irlanda', 'Noruega', 'Áustria'];

//add pais no fim da lista
paises.push('Inglaterra');
console.log(paises);

//remover pais fim da lista
paises.pop();
console.log(paises);

//adicionar pais inicio lista
paises.unshift('Alemanha');
console.log(paises);

//remover pais inicio lista
paises.shift();
console.log(paises);

//imprimir ultimo pais da lista
const ultimo = paises[paises.length - 1]; //verifica o tamanho da lista e reduz 1
console.log(ultimo)

//imprime 2º pais da lista
console.log(paises[1]);

// imprime o país de índice 2
console.log(paises[2]);