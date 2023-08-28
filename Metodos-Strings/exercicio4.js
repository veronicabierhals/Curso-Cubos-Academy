//transforme "veronica veiga bierhals"
//em Veronica Veiga Bierhals

const nome = "veronica veiga bierhals";
const arrayNomes = nome.split(" ");

let nomeFormatado = "";
for (let item of arrayNomes) {
    //transformar a inicial de cada item em maiúscula
    let primeiraLetra = item.slice(0, 1);//retorna primeira letra
    let restanteNome = item.slice(1);

    nomeFormatado += primeiraLetra.toLocaleUpperCase() + restanteNome + " ";
}
console.log(nomeFormatado.trim());