//filtra elementos e retorna eles em um novo array
//quando não encontra um elemento dentro dele, retorna um array vazio
//não altera o array original


//exemplo array de numeros

const numeros = [1, 4, 4, 5, 3, 1, 8];

const resultado = numeros.filter((numero) => {
  return numero === 4;
});
console.log(resultado); //[ 4, 4 ]


//exemplo 2 - array de strings

const nomes = ["joao", "maria", "joao", "jose"]
const resultado2 = nomes.filter((nome) => {
    return nome === "maria";
  });
  console.log(resultado2); //[ 'maria' ]