import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Routes/router";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/EASY_EAT',router)

const PORT = process.env.PORT || 5000;
// const connection = async()=>{
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => console.log(process.env.PORT));
  })
  .catch((err) => console.log("err"));
// }
// connection()
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected");
// });
