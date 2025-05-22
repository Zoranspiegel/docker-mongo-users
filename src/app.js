const connectMongoDB = require("./config/db.js");
const express = require("express");
const morgan = require("morgan");

connectMongoDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/api", (_req, res) => {
  res.json("Under Development").status(200);
});

module.exports = app;
