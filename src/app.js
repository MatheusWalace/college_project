const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const routes = require("./config/routes");

app.use(bodyParser.json());
app.use(cors());

routes.start(app);

module.exports = app;