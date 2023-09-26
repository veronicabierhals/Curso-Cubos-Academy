const { parse } = require("date-fns")

const result = parse('02/11/2014', 'MM/dd/yyyy', new Date())

console.log(result);