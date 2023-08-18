const palavra = 'arara'

let soma = 0;
for (let letra of palavra){
    if (letra === 'a')
    soma++;
}
console.log(`A palavra ${palavra} tem ${soma} letras a. `)
