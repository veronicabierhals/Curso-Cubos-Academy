const carros = [
        {nome: "corola", marca:"toyota", ano:"2020", cor: "prata"},
        {nome: "argo", marca:"fiat", ano:"2021", cor: "preto"},
        {nome: "ranger", marca:"ford", ano:"2021", cor: "prata"},
        {nome: "hilux", marca:"toyota", ano:"2018", cor: "branco"},
    ];

const buscarCarro = (marca, arrayCarros) => {
    const resultado =  arrayCarros.find((carro) => { //busca no array carros
        return carro.marca === marca;
    });
    console.log(resultado);
}
buscarCarro ("toyota", carros); //{ nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' }