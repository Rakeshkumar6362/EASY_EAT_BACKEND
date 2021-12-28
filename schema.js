// const mongoose = require("mongoose");
import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  image: {
    type: String,
    // required:true
  },
  title: {
    type: String,
    // required:true
  },
  subTitle: {
    type: String,
    // required:true
  },
  nonVegMenu: {
    type: Array,
    required: true,
  },
  vegMenu: {
    type: Array,
    // required:true
  },
});

const restaurantSchema = mongoose.model("demo", dataSchema);
// module.exports = { restaurantSchema };
export {restaurantSchema}
