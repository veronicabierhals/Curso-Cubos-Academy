const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

//async / await

//funcao anonima, executa imediatamente
(async function () {
   const cidade = await getCityFromZipcode("41256250");
   console.log(cidade); //primeiro

   const estado = await getStateFromZipcode("41256250");
   console.log(estado); //segundo
})();

//padrão normal
async function teste(){
   return
}

//arrow function
const teste = async() => {
   
}
