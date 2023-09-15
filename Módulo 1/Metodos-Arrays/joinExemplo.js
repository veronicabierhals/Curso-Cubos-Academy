//fazer uma função que recebe um parâmetro do tipo string
//imprimir na tela a string invertida

function inverterString (texto){
    //split: método de string que retorna um array
    const arrayLetras = texto.split("");
    arrayLetras.reverse();

    const textoInvertido = arrayLetras.join("");
    console.log(textoInvertido);
}

inverterString ("Cubos Academy");