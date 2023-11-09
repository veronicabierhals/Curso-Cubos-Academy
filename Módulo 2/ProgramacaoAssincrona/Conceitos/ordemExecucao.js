const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

//retorna cidade
getCityFromZipcode("41256250").then((cidade) => {
    console.log(cidade); //primeiro
    //retorna estado
    getStateFromZipcode("41256250").then((estado) => {
      console.log(estado); //segundo
    })
  })
  .catch((erro) => {
    console.log(erro);
  });

  /*
  //retorna estado
  getStateFromZipcode("41256250")
  .then((estado) => {
    console.log(estado);
  })
  */