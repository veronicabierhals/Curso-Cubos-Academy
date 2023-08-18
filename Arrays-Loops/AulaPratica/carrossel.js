//cada imagem é um item de um array
//array com 7 imagens [0 a 6]
//calcular o índice da imagem que deve ser exibida conforme quantidade de cliques
//direita + avança uma imagem >
//esquerda - colta uma imagem <
//se estiver na ultima imagem e clicar direita volta para primeira
//se tiver na primeira e clicar para a esquerda volta para a última
//sequencia de cliques 
//carrossel começa na primeira imagem [0]
//saida numero entre 0 e 6

const imagens = [0, 1, 2, 3, 4, 5, 6]

//foi do índice 0 até o índice 3, voltou para o 2 e foi novamente para o 3 -> print 3
const sequencia = '>>><>' //3x direita, 1x esquerda, 1x direita
let indiceAtual = 0;
let indiceParou = 0;


for (let item of sequencia){
    if (item === '>'){
        indiceAtual = (indiceAtual + 1);
    } else {
        indiceAtual = (indiceAtual - 1);
    } item = indiceAtual
}
console.log(indiceAtual)
