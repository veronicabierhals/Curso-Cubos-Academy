//aplica o replace em loop

function replaceAll(original, text, newText){
    while (original !== original.replace(text, newText)){
        original = original.replace(text, newText);
    }
    return original;
}

let numero = "1,350,000";

console.log(replaceAll(numero, ",", "."));