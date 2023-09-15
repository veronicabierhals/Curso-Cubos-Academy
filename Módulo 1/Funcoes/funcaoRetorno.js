//verificar se pessoa é maior de idade

function verificarMaioridade(idade){
    if (idade >= 18){
        //é maior de idade
        return true;
    } else {
        //não é maior de idade
        return false;
    }

}

const valorRetornadoPelaFuncao = verificarMaioridade(20);
console.log(valorRetornadoPelaFuncao);