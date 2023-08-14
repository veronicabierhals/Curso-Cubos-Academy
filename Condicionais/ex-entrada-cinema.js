const temIngresso = true;
const censura = 16;
const idade = 16;

//ter ingresso e ter idade maior ou igual a censura
if (temIngresso === true) {
    if (idade >= censura) {
        console.log(`Você tem ingresso e é maior de ${censura}. Pode assistir o filme`);
    } else {
    console.log('Você é menor de idade e não pode assistir o filme.');
    }
} else {
    console.log('Você não tem ingresso, então não pode entrar no cinema.');
}