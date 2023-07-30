require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.port || 3000;

const start = async () => {
  app.listen(port, console.log(`Server listening at ${port}`));
};
start();
