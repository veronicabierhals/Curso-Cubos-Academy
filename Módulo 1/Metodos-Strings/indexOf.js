//saber se um e-mail é válido
//tem que ter pelo menos um @
//tem que ter pelo menos 1 ponto depois do @

const possivelEmail = "veronicabierhals1@gmail.com";

const indexArroba = possivelEmail.indexOf("@");

const indexPonto = possivelEmail.indexOf(".", indexArroba);

    if (indexPonto > indexArroba){
        console.log("É um e-mail válido.")
    } else {
        console.log("Não é um e-mail válido")
    };
