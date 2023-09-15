const temIngresso = true;
const censura = 16;
const idade = 16;

//ter ingresso && ter idade maior ou igual a censura

if (temIngresso === true && idade >= censura){
    //só executa se todas as condições forem verdadeiras
    console.log('Pode entrar.');
} else {
    console.log('Barrada.')
}