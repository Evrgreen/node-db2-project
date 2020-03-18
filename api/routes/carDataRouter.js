const express = require("express");
const Router = express.Router();
const db = require("../../data/db-config.js");
Router.route("/")
  .get(async (req, res) => {
    const cars = await db("cars");
    res.status(200).json(cars);
  })
  .post(carValidator, async (req, res) => {
    console.log(req.body);
    console.log(postID);
    res.status(201).json({ Message: postID });
  });

Router.route("/:id").get(async (req, res) => {
  const car = await db("cars").where({ id: req.params.id });
  res.status(200).json(car);
});

function carValidator(req, res, next) {
  try {
    const { VIN, Make, Model, Mileage } = req.body;
    if (!VIN || !Make || !Model || !Mileage) {
      res.status(400).json({
        errorMessage:
          "A new entry must include the following: VIN,Make,Model,Mileage"
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send(`error validating new post: ${error} `);
  }
}

module.exports = Router;
