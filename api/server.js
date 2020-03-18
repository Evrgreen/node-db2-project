const express = require("express");
const db = require("../data/db-config.js");
const server = express();
const carDataRouter = require("./routes/carDataRouter.js");
server.use(express.json());
server.use("/api/cars", carDataRouter);
server.get("/", (req, res) => {
  res.status(200).json({ message: "Used Car Sales" });
});

module.exports = server;
