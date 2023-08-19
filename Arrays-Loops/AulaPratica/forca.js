//jogo da forca

const palpite = 'x'
const palavra = 'veronica'
//imprimir quantidade de acertos
//quantas vezes a letra aparece na palavra

//percorre a string
//verificar se tem a letra do palpite
//se tiver somar++

let acerto = 0;

for (let letra of palavra){
    if (letra === palpite){
        acerto++;
    }
}
console.log(acerto);
