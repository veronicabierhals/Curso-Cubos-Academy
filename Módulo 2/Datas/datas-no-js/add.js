//operacao aritmetica com datas

const { add } = require ("date-fns");

const date = new Date(2018, 2, 13, 12);

console.log(date);

//não muda o objeto original
//retorna um novo objeto
console.log(add(date, {
    seconds: 2,
    days: 1,
    years: 10
}));