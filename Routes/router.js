const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();

const { restaurantSchema, employee } = require("../schema");

router.get("/", async (req, res) => {
  console.log('entered')
   await restaurantSchema
    .find()
    .then((data) => {
      res.send(data);
      console.log(data, "data");
    })
    .catch((err) => {
      console.log(err);
    });
 
});
router.post("/addData", async (req, res) => {
  const data = req.body;
  const insert = await restaurantSchema.insertMany(data)
  .then(data=>console.log(data))
//   insert.save();
  res.send({
      message:"Data added successfully",
      data
  })
});

router.delete("/delete", async (req, res) => {
//   const data = req.params.name;
  await restaurantSchema.deleteMany({}).then(data=>{console.log(data)})
  res.send({
      message:"deleted successfully"
  })
});
module.exports = router;
