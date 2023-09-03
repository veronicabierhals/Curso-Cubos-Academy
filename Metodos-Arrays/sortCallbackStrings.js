//localeCompare => fará a ordenação corretamente independente de letras maiúsculas, minúsculas e acentuação.

//ordenação padrão

//se tudo estiver minusculo e sem acento dá certo
const pessoas = ["joao", "ana", "carlos", "beatriz"];

pessoas.sort();
console.log(pessoas); //[ 'ana', 'beatriz', 'carlos', 'joao' ]

//localeCompare()
const letraA = "a";
const letraC = "c";

console.log(letraA.localeCompare(letraC)); //-1 / a vem antes de c
console.log(letraC.localeCompare(letraA)); // 1
console.log(letraC.localeCompare(letraC)); // 0

//ordenação crescente
const pessoas2 = ["João", "ana", "carlos", "beatriz"];

pessoas2.sort((primeiro, segundo) => {
  return primeiro.localeCompare(segundo);
});
console.log(pessoas2);

//ordenação decrescente
const pessoas3 = ["João", "ana", "carlos", "beatriz"];

pessoas3.sort((primeiro, segundo) => {
  return segundo.localeCompare(primeiro);
});
console.log(pessoas3);