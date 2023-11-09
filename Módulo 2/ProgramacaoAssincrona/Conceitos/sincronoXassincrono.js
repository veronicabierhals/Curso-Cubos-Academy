const { getCityFromZipcode } = require("utils-playground");
/*
modelo sincrono
console.log("Inicio");
for (let index = 1; index < 5; index++) {
    console.log(index);
    
}
console.log("fim");

----------

console.log("Inicio");

//funcao assincrona
getCityFromZipcode("41256250").then(cidade => {
    console.log(cidade);
})

console.log("fim");
*/
//Promise
//retorna uma promessa que pode ser resolvida ou rejeitada
//estados: pendente, resolvida, rejeitada
const cidade = getCityFromZipcode("41256250");
console.log(cidade);