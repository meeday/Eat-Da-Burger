const express = require("express");

const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll(data => {
    const burgerObj = {
      burgers: data
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"],
  [
    req.body.name, false
  ], 
    result => {
      if(result.affectedRows === 0) {
        return res.status(400).end();
      }
      res.status(201).end();
    });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.updateOne({devoured: true}, condition, result => {
    if(result.affectedRows === 0) {
      return res.status(400).end();
    }
    res.status(202).end();
  });
})
