// express package required into file
const express = require("express");
// router dependency initialised
const router = express.Router();
// require burger model into file
const burger = require("../models/burger.js");
// router.get that directs user to homepage
router.get("/", (req, res) => {

    burger.selectAll(data => {
        
        const hbsObj = { burgers: data };
        
        res.render("index", hbsObj);
    });
});
// router.post to post users new burgers to the database
router.post("/api/burgers", (req, res) => {
    
    console.log(req.body);
    

    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], result => {
        
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
// router.put to update devoured boolean to true
router.put("/api/burgers/:id", (req, res) => {
    
    const condition = `id = ${req.params.id}`;
    
    burger.updateOne({ devoured: true }, condition, result => {

        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
  );
});
// export router dependency
module.exports = router;