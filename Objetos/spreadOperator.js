const pessoa ={
    nome: "José",
    idade: 20,
    cidade: "Salvador",
    profissao: "Dev"
};

const endereco = {
    rua: "Aqui",
    numero: 32,
    bairro: "Bairro legal"
}

const objetoFundido =  {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
}
console.log(objetoFundido);