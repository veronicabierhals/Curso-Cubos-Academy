const palavra = 'Alemanha';

let encontrado = false; // inicia false

for (let letra of palavra){ //letra guarda cada letra da palavra
    if (letra === 'h') { //verifica se tem h
        console.log('Tem a letra h'); //se tiver imprime
        encontrado = true; //muda para true
        break; //encerra o loop
    }
} 
if (!encontrado) { //se não tem h
    console.log('Não tem h'); //imprime
}