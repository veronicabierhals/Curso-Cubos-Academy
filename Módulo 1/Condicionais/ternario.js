const saldo = 1;

const unidade = (saldo === 1 ? 'real' : 'reais'); //condição (saldo === 1), o que será retornado se for verdadeiro ('real'), se for falso ('reais').

console.log(`Você tem ${saldo} ${unidade}.`)
// igual a

//if (saldo === 1){
//    unidade = 'real';
//} else {
//    unidade = 'reais'
//}