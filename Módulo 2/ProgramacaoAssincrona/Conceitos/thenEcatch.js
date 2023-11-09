const { getCityFromZipcode } = require("utils-playground");
/*
getCityFromZipcode("41256250")
  //retorno função promessa resolvida
  .then((cidade) => {
    console.log(cidade);
  })
  //retorno função rejeitada
  .catch((erro) => {
    console.log(erro);
  });

  OU
*/

const cidade2 = getCityFromZipcode("41256250");
cidade2.then((cidade) => {
  console.log(cidade);
});

cidade2.catch((erro) => {
  console.log(erro.message);
});

//const cidade = getCityFromZipcode("41256250");
