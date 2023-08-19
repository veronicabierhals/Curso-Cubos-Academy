//pontuacao 0 a 100
//pelo menos 3 disparos com + 70pts

const disparos = [0, 10, 50, 70, 80, 30] //pontuacao cada disparo
//se aprovado imprimir quantidade de disparos


//percorrer array
//verificar se é >= 3
//se for verificar se 3 ou mais disparos são > (maiores) 70pts
//se sim imprimir numero de disparos acima de 70pts
//se não -> ELIMINADO

let contagemDisparos = 0;

for (let item of disparos){
    if (disparos.length >= 3){
        if (item > 70){
            contagemDisparos++;
        }
    } 
} if (contagemDisparos >= 3){
    console.log(contagemDisparos);
} else {
    console.log('ELIMINADO')
}