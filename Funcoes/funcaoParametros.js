function cumprimentar (pessoa, idade){ //declarei a função
    console.log(`Olá!, ${pessoa}! Fiquei sabendo que você tem ${idade} anos.`);
}

const nome = "João" //pode-se declarar o valor em uma variável
cumprimentar(nome, 35); //e chamar ela como parâmetro

cumprimentar("José", 30); //chama a função com argumento José
cumprimentar("Maria", 20);
cumprimentar("Ana", 40);

/*
function cumprimentar (pessoa, idade){ //declarei a função
    console.log(`Olá!, ${pessoa}! Fiquei sabendo que você tem ${idade} anos.`);
    console.log(pessoa); // é possível chamá-la aqui
}
console.log(pessoa); //aqui não, pois ela não existe fora da função

*/