require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port;
const connectMongo = require("./server");

app.get("/", (req, res) => {
  res.send("Hello Mongo I'm Mongoose");
});
app.listen(port);

connectMongo();
