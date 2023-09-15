//campeonato futebol

//3 pontos quando vence uma partida = 'V'
//1 ponto quando empata uma partida = 'E'
//nenhum ponto quando perde uma partida = 'D'
//calcular pontuação final

const resultados = ['D', 'E', 'V', 'E', 'D']

//percorrer o array
//se item === V -> soma 3
//se item === E -> soma 1
//se nao -> soma 0
//imprimir somaPontos

let somaPontos = 0;
for (let item of resultados){
    if (item === 'V'){
        somaPontos += 3;
    } else if (item === 'E'){
        somaPontos += 1;
    } else {
        somaPontos += 0;
    }
}
console.log(somaPontos);