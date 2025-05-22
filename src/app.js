require("dotenv").config();
const connectMongoDB = require("./config/db.js");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler.js");
connectMongoDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
