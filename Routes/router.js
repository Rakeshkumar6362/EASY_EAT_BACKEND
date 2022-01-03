import express from "express";
import { restaurantSchema, userDetails } from "../schema.js";
const router = express.Router();
const app = express();
import dotenv from "dotenv";
dotenv.config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
import twilio from 'twilio'

const client = twilio(accountSid,authToken)

client.verify.services.create({friendlyName: 'My First Verify Service'})
                      .then(service => console.log(service.sid)); 
router.get("/", (req, res) => {
  res.send("hello");
});
router.get('/getOtp/:phoneNumber',(req,res)=>{
  client.verify.services('VAcd9494a7a85627418d3d1150a71b4fd9')
  .verifications
  .create({
    to:`+91${req.params.phoneNumber}`,
    channel:'sms'
  })
  .then((data)=>{
    res.send(data)
  })
})
router.get('/verifyOtp/:phoneNumber/:otp',(req,res)=>{
  client.verify.services('VAcd9494a7a85627418d3d1150a71b4fd9')
  .verificationChecks
  .create({
    to:`+91${req.params.phoneNumber}`,
    code:req.params.otp.toString()
  })
  .then((data)=>{
    res.send(data)
    console.log(data);
  }).catch(err=>{
    console.log(err);
  })
})

router.get('/getExistingUser/:phoneNumber',async (req,res)=>{
  let data = req.params.phoneNumber
  await userDetails
  .find({phoneNumber:data})
  .then(data=>{
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})

router.get("/getAll/user", async (req, res) => {
  await userDetails
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/save/user", async (req, res) => {
  await userDetails
  .insertMany([...req.body])
  .then(data=>{
    console.log(data);
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
  console.log(res);
});
router.get("/get", async (req, res) => {
  await restaurantSchema
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
    });
});
router.post("/addData", async (req, res) => {
  const data = req.body;
  const insert = await restaurantSchema
    .insertMany(data)
    .then((data) => console.log(data));
  //   insert.save();
  res.send({
    message: "Data added successfully",
    data,
  });
});
router.delete("/delete", async (req, res) => {
  await restaurantSchema.deleteMany({}).then((data) => {
    console.log(data);
  });
  res.send({
    message: "deleted successfully",
  });
});
export default router;
// module.exports = router;
