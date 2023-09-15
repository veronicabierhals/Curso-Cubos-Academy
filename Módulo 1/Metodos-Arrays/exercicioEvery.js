const usuarios = [
    {nome: "joao", idade: 23},
    {nome: "maria", idade: 18},
    {nome: "ana", idade: 30},
    {nome: "rodrigo", idade: 19},
];

function fiscalizarFesta (arrayObjetos){
    const resultado = arrayObjetos.every (function(objeto){
        return objeto.idade > 17;
    });
if (resultado){
    console.log("Festa liberada!");
} else {
    console.log("Possui menor de idade.");
}
};    

fiscalizarFesta(usuarios);