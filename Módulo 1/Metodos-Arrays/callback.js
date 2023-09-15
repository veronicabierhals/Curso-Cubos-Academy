//executa a função a cada intervalo de tempo definido
/*
setInterval(() => {
    console.log("Olá alunos!");
}, 2000);

//igual a

const imprimir = () => {
    console.log("Olá alunos!");
}
setInterval(imprimir, 2000);

_________________

const imprimir = () => {
    console.log("Olá alunos!");
    clearInterval(interval) //interrompe
}
const interval = setInterval(imprimir, 2000);

*///
let numero = 0;

const contador = setInterval (function(){
    console.log(numero);

    numero++;
}, 1000)