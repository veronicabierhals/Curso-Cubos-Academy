
const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    apresentar: function (){ //nome da função passa a ser o nome da propriedade //função anônima
        const retornoFaixaEtaria = this.determinarFaixaEtaria(this.idade);
    
    console.log(`Sou ${this.nome}, sou um(a) ${retornoFaixaEtaria}
    de ${this.idade} anos e sou ${this.profissao}.`)
    },
    determinarFaixaEtaria: function (){ //a variável idade só existe dentro da função
        if (this.idade < 25){
            return "jovem";
        } else if (this.idade < 65){
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    }
};
pessoa1.apresentar();