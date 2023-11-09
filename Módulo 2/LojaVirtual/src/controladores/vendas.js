const produtos = require("../bancoDeDados");
const fs = require("fs/promises");

const listagemProdutos = async (req, res) => {
  return res.status(200).json(produtos);
};

const vendas = async (req, res) => {
    const {produto_id, quantidade} = req.body;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id);
    });

    if(!produtoEncontrado){
        return res.status(404).json("O produto não foi encontrado.")
    }

    try{
        //lê arquivo json
        const vendas = await fs.readFile("./src/vendas.json")

        //converte arquivo json para js
        const parseVendas = JSON.parse(vendas);

        //recebe info navegador e coloca no arquivo
        parseVendas.vendas.push({
            produto: produtoEncontrado,
            quantidade
        });
       await fs.writeFile("./src/vendas.json", JSON.stringify(parseVendas));

       return res.status(201).json("venda registrada com sucesso")


    } catch (erro){
        return res.status(500).json("Erro do servidor");
    }
};

module.exports = {
  listagemProdutos,
  vendas,
};
