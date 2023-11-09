//somar dias uteis a uma data
const {addBusinessDays} = require("date-fns")

//add 10 dias uteis
const result = addBusinessDays(new Date(2014, 8, 1), 10);

console.log(result);