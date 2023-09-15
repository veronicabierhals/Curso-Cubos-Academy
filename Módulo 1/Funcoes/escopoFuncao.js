let z = 5; //declarado fora

function soma (x, y){
    return x + y + z; //utilizado dentro
}

console.log(soma(5,3));