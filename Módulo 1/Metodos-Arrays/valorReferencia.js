let numero1 = 5;
let numero2 = numero1;

numero1 = 10;
console.log("numero1 =", numero1); //numero1 = 10
console.log("numero2 =", numero2); //numero2 = 5


//-----------------------
let texto1 = "abra";
let texto2 = texto1;

texto1 = texto1 + "cadabra";
console.log("texto1 =", texto1); //texto1 = abracadabra
console.log("texto2 =", texto2); //texto2 = abra


//-----------------------

let objeto1 = {prop: 5};
let objeto2 = objeto1;

objeto1.prop = 10;
objeto2.prop = 20;

console.log("objeto1 =", objeto1); //objeto1 = { prop: 10, prop: 20 }
console.log("objeto2 =", objeto2); //objeto2 = { prop: 10, prop: 20 }

//-----------------------

//let array1 = [1,2,3];
//é igual a objeto
let array1 = {
        0: 1,
        1: 2,
        2: 3
}
let array2 = array1;

array1.push(4);
array2.push(5);

console.log("array1 =", array1); //array1 = [ 1, 2, 3, 4, 5 ]
console.log("array2 =", array2); //array2 = [ 1, 2, 3, 4, 5 ]