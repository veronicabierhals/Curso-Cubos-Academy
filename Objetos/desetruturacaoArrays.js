const array = [1,2,3,4,5,6];

//const a = array[0];
//const b = array[1];
//igual a

//const [a,b] = array;
//console.log(a,b);

//const [a, ...resto, b] = array; //não funciona

const [a,b, ...resto] = array; //resto tem que ser o último

console.log(a,b, resto);