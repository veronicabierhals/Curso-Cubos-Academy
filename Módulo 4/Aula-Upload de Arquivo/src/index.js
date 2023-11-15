require("dotenv").config();
const express = require("express");
const multer = require("./multer");
const aws = require("aws-sdk");

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
  const { file } = req;
  try {
    const arquivo = await s3
      .upload({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
      .promise();

    return res.status(200).json({
      url: arquivo.Location,
      path: arquivo.Key,
    });
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
      const arquivo = await s3
        .upload({
          Bucket: process.env.BACKBLAZE_BUCKET,
          Key: `imagens/multiplas/${file.originalname}`,
          Body: file.buffer,
          ContentType: file.mimetype,
        })
        .promise();

      resultado.push({
        url: arquivo.Location,
        path: arquivo.Key,
      });
    }

    return res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/arquivos", async (req, res) => {
  try {
    const arquivos = await s3
      .listObjects({
        Bucket: process.env.BACKBLAZE_BUCKET,
      })
      .promise();

    return res.json(arquivos.Contents);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(process.env.PORT);
