require("dotenv").config();
const express = require("express");
const multer = require("./multer");
const aws = require('aws-sdk')

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3);

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
});

const app = express();

app.use(express.json());

app.post("/upload", multer.single("arquivo"), async (req, res) => {
  console.log(req.file);
  return res.json({ mensagem: "tudo certo" });
});

app.get("/arquivos", async (req, res) => {
  try {
    const arquivos = await s3.listObjects({
        Bucket: process.env.BACKBLAZE_BUCKET,
      }).promise()

    return res.json(arquivos);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});
