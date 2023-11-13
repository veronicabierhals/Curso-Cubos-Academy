const express = require("express");
const sendMail = require("./controllers/mail");

const routes = express();

routes.post('/send', sendMail);

module.exports = routes
