function soma (n1, n2){
    if (typeof(n1) !== "number" ||
        typeof(n2) !== "number")
{
    return "Error"
}
return n1 + n2
}
const resultado = soma ("3", 2);
console.log(resultado);