const pessoa = {
  nome: "José",
  idade: 20,
  cidade: "Salvador",
  profissao: "Dev",
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;
// igual a

const { nome, idade, ...outros } = pessoa;
//const {propriedade, propriedade} = nomeDoObjeto

console.log(nome, idade);
console.log(outros);