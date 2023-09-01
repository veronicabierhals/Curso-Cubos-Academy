//imprimir palavras do array que tem primeiraLetra e segundaLetra
//Caso não nenhuma palavra do array de palavras atenda aos requisitos, imprima na tela NENHUMA.

//percorrer array
//ver se primeira letra da palavra é igual a primeiraLetra
//ver se segunda letra da palavra é igual a segundaLetra
//se for colocar no fim (push) de um novo array
//se não, ignora
//se for imprimir a palavra
//se não imprimir NENHUMA
const palavras = ['aveia', 'manha', 'ave'] //palavras minusculas, sem acento
const primeiraLetra = 'a' //um caracter minusculo
const segundaLetra = 'v' //um caracter minusculo

let palavrasFiltrada = []

for (let palavra of palavras){
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra){
        palavrasFiltrada.push(palavra);
    }
}
if (palavrasFiltrada.length > 0) {
    for (let palavra of palavrasFiltrada) {
        console.log(palavra);
    }
} else {
    console.log('NENHUMA');
}