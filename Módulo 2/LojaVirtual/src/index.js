const express = require("express");
const app = express();
const roteadores = require("./roteadores")

app.use(express.json());
app.use(roteadores);


app.listen(3000);