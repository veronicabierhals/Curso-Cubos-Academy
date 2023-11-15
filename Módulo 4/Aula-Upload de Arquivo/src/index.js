require("dotenv").config();
const express = require("express");
const multer = require("./multer");
const { uploadFile, listagemArquivos, excluirArquivo } = require("./storage");

const app = express();

app.use(express.json());

app.post("/upload", multer.single("arquivo"), async (req, res) => {
  const { file } = req;
  try {
    const arquivo = await uploadFile(
      `imagens/${file.originalname}`,
      file.buffer,
      file.mimetype
    );

    return res.status(201).json(arquivo);
  } catch (error) {
    res.status(500).json(error.message);
  }
  return res.json({ mensagem: "tudo certo" });
});

app.post("/upload-multiple", multer.array("arquivo"), async (req, res) => {
  const { files } = req;
  try {
    const resultado = [];

    for (const file of files) {
      const arquivo = await uploadFile(
        `imagens/${file.originalname}`,
        file.buffer,
        file.mimetype
      );

      resultado.push({ arquivo });
    }

    return res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/arquivos", async (req, res) => {
  try {
    const files = await listagemArquivos();

    return res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/arquivos", async (req, res) => {
  const { file } = req.query;

  try {
    await excluirArquivo(file);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT);
