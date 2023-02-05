const FeedbackModel = require("../models/Feedback");

const SaveFeedback = async(req,res) => {
    try {
        const {q1,q2,q3,q4,q5,q6} = req.body;

        const newfeed = new FeedbackModel({
            q1,q2,q3,q4,q5,q6
        })
        console.log(newfeed);

        await newfeed.save();
        res.status(200).json({message:"Feedback"});
    } catch (error) {
        res.status(501).json({message:"Error"});
    }
}

const CreateQR = async(req,res)=>{
    try {
        const url = req.body;
        await fetch('https://api.apyhub.com/generate/qr-code/url?output=sample.png',
        {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "apy-token":"APT0XzXnR7Ue1l8Zc17qkTqROXLNoKmRbkLdP0P4ENICW3Dov"
            },
            body: JSON.stringify({
                "content":"http://localhost:3000/user/registration/XYZ"
            })
        }).then((e)=>{
            return e.json();
        }).then((re)=>{
            res.status(200).json(re);
        })

    } catch (error) {
        return res.status(501).json({message:error});
    }   
}

module.exports = {SaveFeedback, CreateQR}