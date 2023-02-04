const router = require("express").Router();
const Redis = require("ioredis");
const AdminModel = require("../models/Admin");

const accountSid = "AC23560dcb904b95b9234c975102dd8c3b";
const authToken = "99772d9ee2e8c6e21182a2eb7b37caca";

const twilioClient = require('twilio')(accountSid, authToken);

const redisUrl ='redis://127.0.0.1:6379';

const redisClient = new Redis(redisUrl);


router.post('/register', async(req,res)=>{
  try {
    const {name,email,phoneNumber} = req.body;
    const admin = await AdminModel.findOne({email:email});
    if(admin){
      res.status(200).json({message:"Duplicate Entry"});
    }
    const newadmin = new AdminModel({
      name,email,phoneNumber
    })

    await newadmin.save();
    res.status(200).json({message:"Admin Successfully Added"});
  } catch (error) {
    res.status(501).json({message:"API ERROR"});
  }
})

router.post('/send-code', async (req, res) => {
    const recipientPhoneNumber = req.body.phoneNumber;
    const randomNumber = Math.random().toString().substr(2, 6).repeat(6).substr(2, 6);;
  
    const message = `Hello ! Your verification code is: ${randomNumber}`;
    const phoneNumber = recipientPhoneNumber;
    
    await redisClient.set(recipientPhoneNumber, `${randomNumber}`, 'EX', 600);
  
    const response = await twilioClient.messages.create({
      from: '+12058500889',
      to: recipientPhoneNumber,
      body: message,
    });
  
    return res.json({ message: `Message sent with id: ${response.sid}` });
  });


router.post('/verify-code', async (req, res) => {
    const recipientPhoneNumber = req.body.phoneNumber;
    const smsCodeReceived = req.body.smsCode;
  
    const value = await redisClient.get(recipientPhoneNumber);
  
    if (value === `${smsCodeReceived}`) {
      await redisClient.del(recipientPhoneNumber);
  
      return res.json({ message: 'This is a valid match!' });
    }
  
    return res.status(400).json({ message: `The phone number and the SMS code doesn't match.` });
  });


module.exports = router;


