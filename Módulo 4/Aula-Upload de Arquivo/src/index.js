require('dotenv').config()
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ mensagem: "tudo certo" });
});

app.listen(process.env.PORT);
