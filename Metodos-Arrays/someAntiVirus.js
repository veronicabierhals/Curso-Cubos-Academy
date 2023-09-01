const arquivos = [
    "texto.txt",
    "foto.png",
    "contrato.doc",
    "instalador.bat"];

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => { //testa o array arquivos
        const existeExtensao = arquivo.indexOf(".bat"); //procura o .bat no array

        return existeExtensao !== -1; //quando não encontra o arquivo retorna -1
    });

    if (resultado){
        console.log("Vírus detectado.");
        } else {
        console.log("Nenhum vírus encontrado.");
        };
};

antiVirus(arquivos);

