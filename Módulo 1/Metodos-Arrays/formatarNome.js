//formatarNome

const nome = "veronica veiga bierhals";
const nomeFormatado = nome
  .split(" ")
  .map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
  .join(" ");
console.log(nomeFormatado);
