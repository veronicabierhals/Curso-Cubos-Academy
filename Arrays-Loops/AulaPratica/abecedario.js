let letra = 'm'; //minuscula e sem acento
let palavras = ['mamao', 'maca', 'melao', 'melancia', 'laranja']; //minuscula e sem acento

//imprimir numero inteiro com a quantidade de crianças que perderam a rodada

//percorrer o array
//verificar se a primeira letra começa com m
//se não começar, contar
//imprimir quantidade de criança que errou
let contador = 0;

for (let primeiraLetra of palavras){
    if (primeiraLetra[0] !== letra){
        contador++;
    }
}
console.log(contador);