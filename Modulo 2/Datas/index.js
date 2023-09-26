//sem argumento ele pega o momento atual
const agora = new Date();
console.log(agora);

const date = new Date(2020, 0);
console.log(date);

const finalDaCopa = new Date(2002, 5, 30, 8);
//soma uma hora em timestamp
const finalMaisUmaHora = +finalDaCopa + 100*60*60 //igual a -> finalDaCopa.getTime() / 1h

//transforma em uma data
const maisUmaHoraDate = new Date(finalMaisUmaHora);

console.log(maisUmaHoraDate);