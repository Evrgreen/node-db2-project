const knex = require("knex");
const knexFile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";

const knexConfig = knexFile[environment];

// db represents a live connection to the database
module.exports = knex(knexConfig);
