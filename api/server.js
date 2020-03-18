const express = require("express");
const db = require("../data/db-config.js");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Used Car Sales" });
});

module.exports = server;
