// const mongoose = require("mongoose");
import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  image: {
    type: String,
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
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true
  }
});

const restaurantSchema = mongoose.model("demo", dataSchema);
const userDetails = mongoose.model('user',userSchema)
// module.exports = { restaurantSchema };
export {restaurantSchema,userDetails}
