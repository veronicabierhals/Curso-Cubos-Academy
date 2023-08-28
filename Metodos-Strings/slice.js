//Quero obter apenas os dois dígitos do estado de uma cidade

const cidade = "Salvador-BA";

const penultimoIndice = cidade.length - 2;

let estado = cidade.slice(penultimoIndice);

console.log(estado);
