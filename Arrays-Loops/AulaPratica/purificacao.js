const stringCorrompida = '*Canis %lupus )familiaris';

//percorrer a string
//verificar se é um caracter especial
//se for remover
//se não escreve
//print string

let stringPurificada = '';

for (let caracter of stringCorrompida){
    if (caracter !== '!' &&
    caracter !== '@' &&
    caracter !== '#' &&
    caracter !== '$' &&
    caracter !== '%' &&
    caracter !== '&' &&
    caracter !== '*' &&
    caracter !== '(' &&
    caracter !== ')' ){
        stringPurificada += caracter;

    } 
}
console.log(stringPurificada)