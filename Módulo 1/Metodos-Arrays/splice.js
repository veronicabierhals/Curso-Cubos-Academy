const lista = ["a","b","c","d","e"];

//1 -> indice que quer alterar /2-> qtd que quer remover /"f" -> o que quer incluir no lugar
lista.splice(1,2,"f");

console.log(lista); //[ 'a', 'f', 'd', 'e' ]

//-------------------------------------------

const lista3 = ["a","b","c","d","e"];
//1 -> indice que quer alterar /2-> qtd que quer remover /"f","h","i" -> o que quer incluir no lugar
lista3.splice(1,2,"f","h","i");

console.log(lista3); //[ 'a', 'f', 'h', 'i', 'd', 'e' ]

//-------------------------------------------

const lista2 = ["a","b","c","d","e"];

//1 -> indice que quer alterar /0-> não remove nada /"f" -> inclui no índice informado
lista2.splice(1,0,"f");
console.log(lista2); //[ 'a', 'f', 'b', 'c', 'd', 'e' ]


//lista.push("f"), inserir no fim------------------------------

const lista4 = ["a","b","c","d","e"];
lista4.splice(lista4.length, 0,"f");
console.log(lista4); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]


//lista.pop(), remove ultimo item array------------------------

const lista5 = ["a","b","c","d","e"];
lista5.splice(lista5.length - 1, 1);
console.log(lista5); //[ 'a', 'b', 'c', 'd' ]


//lista.shift(), remove primeiro item array-------------------

const lista6 = ["a","b","c","d","e"];
lista6.splice(0, 1);
console.log(lista6); //[ 'b', 'c', 'd', 'e' ]


//lista.unshift(), adiciona primeiro item array---------------

const lista7 = ["a","b","c","d","e"];
lista7.splice(0, 0, "f");
console.log(lista7); //[ 'f', 'a', 'b', 'c', 'd', 'e' ]