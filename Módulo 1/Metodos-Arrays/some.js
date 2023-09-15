const nomes = ["joao", "maria", "jose", "rodrigo"];

/*
const minhaFuncaoCallback = (nome) => {
    return nome === "joao"
}
igual ao que está entre parênteses no some
*/
const resultado = nomes.some((nome) => { //testa o array nomes
    return nome === "joao" //se pelo menos um for joao retorna true
});

console.log(resultado);

///////////

const numeros = [2, 5, 9, 7];
const resultado2 = numeros.some((numero) => {
    return numero % 2 === 0; //verifica se número é par
});
console.log(resultado2);