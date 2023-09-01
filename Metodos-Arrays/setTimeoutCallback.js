/*function imprimirNome (nome){
    console.log(nome);
}
 igual a
const imprimirNome = (nome) => {
    console.log(nome);
}
imprimirNome("Guido")

_______

function imprimirTexto (){
    console.log("Cubos Academy")
}
setTimeout(imprimirTexto, 2000)
/ 2000milisegundos = 2seg

/ igual a
*/
setTimeout(() => {
    console.log("Cubos Academy")
}, 2000)

setTimeout(function(){
    console.log("Cubos Academy")
},2000)