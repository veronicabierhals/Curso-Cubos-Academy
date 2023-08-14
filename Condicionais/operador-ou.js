const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = true;

//ter ingresso && ter idade maior ou igual a censura OU está acompanhado dos pais

//if (temIngresso === true) {
if (temIngresso) { //quando o tipo da variável é boleana e verdadeira não é necessário igualar a true
    if (idade >= censura || estaComOsPais) {
        console.log('Pode entrar');
    } else {
        console.log('Barrado');
    }
} else {
    console.log('Barrado.');
}