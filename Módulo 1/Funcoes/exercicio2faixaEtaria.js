/*função que tem parâmetro idade e que determina a faixa etária de uma pessoa a partir da idade
21 anos ou menos -> jovem
22 a 65 anos -> adulto(a)
66 anos ou mais -> idoso(a)
retornar uma string que informa se a pessoa é jovem, adulto ou idoso
*/

function determinarFaixaEtaria (idade){
    if (idade <= 21){
        return "jovem";
    } else if (idade <= 65){
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

const retornoFaixaEtaria = determinarFaixaEtaria(67);
console.log(retornoFaixaEtaria);

//ou pode imprimir direto
//console.log(determinarFaixaEtaria(67));