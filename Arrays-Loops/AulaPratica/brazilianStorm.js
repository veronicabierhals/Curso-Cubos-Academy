//cada juiz dá uma nota
//nota final -> descarta maior e menor nota -> média de notas restantes
//calcular nota final

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

//imprimir nota final da manobra

//percorrer array
//identificar maior numero
//identificar menor numero
//somar numeros restantes e dividir pelo tamanho do array
let maiorNota = 0;
let menorNota = notas[0];
let somaNotas = 0;

for (let item of notas){
    if (item > maiorNota){
        maiorNota = item;
    }
}
for (let item of notas){
    if (item < menorNota){
        menorNota = item;
    }
}
for (let item of notas){
    somaNotas += item;
}
const notaFinal = (somaNotas - maiorNota - menorNota) / (notas.length - 2);
console.log(notaFinal);
