const numeros = [1,2,3,4];

const resultado = numeros.every((numero) => {
    return numero < 5;
});

console.log(resultado);

///////////


const frutas = ["abacaxi", "manga", "melancia"];

const resultado2 = frutas.every(function(elementoAtual){
    return elementoAtual !== "banana" //verifica se todos elementos são diferentes de banana
});
console.log(resultado2);