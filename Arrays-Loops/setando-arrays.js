const nomes = ['Jose', 'João' , 'Maria', 'Joana', 'André'];

const x = 3;
nomes[0] = 'Andreia';
nomes[1] = 'Andreia';
nomes[2] = 'Andreia';
nomes[x] = 'Andreia'; //3 está guardado na variável x

console.log(nomes);