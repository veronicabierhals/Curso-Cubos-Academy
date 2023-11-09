const hoje = new Date();

//dia da semana
console.log(hoje.getDay());

//mês
console.log(hoje.getMonth());

//setar data
//hoje.setDate(4);

//voltar em datas
hoje.setDate(hoje.getDate() - 30);

console.log(hoje);