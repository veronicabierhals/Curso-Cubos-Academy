//fazer função de apresentação que chame a função que determina a faixa etaria

function determinarFaixaEtaria(idade){ //a variável idade só existe dentro da função
    if (idade < 25){
        return "jovem";
    } else if (idade < 65){
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}
function apresentar(pessoa){ //a variável pessoa só existe dentro da função
    const retornoFaixaEtaria = determinarFaixaEtaria(pessoa.idade)
    
    console.log(`Sou ${pessoa.nome}, sou um(a) ${retornoFaixaEtaria}
    de ${pessoa.idade} e sou ${pessoa.profissao}.`)
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor",
};
apresentar(pessoa1);

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico",
};
apresentar(pessoa2);

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante",
};
apresentar(pessoa3);