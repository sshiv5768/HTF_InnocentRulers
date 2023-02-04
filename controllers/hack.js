const HackathonModel = require("../models/Hackathon");

const NewHackathon = async(req,res) => {
    try {
        const {title,desc,admin} = req.body;
        const newhack = new HackathonModel({
            title,desc,admin
        });

        console.log(newhack);

        await newhack.save();
        res.status(200).json({message:"New Hackathon created"});
    } catch (error) {
        res.status(501).json({message:"API ERROR"});
    }
}


const GetHackathon = async(req,res)=>{
    try {
        const {admin} = req.body;
        const res= await HackathonModel.find({admin:admin});

        res.status(200).json({message:res});
    } catch (error) {
        res.status(501).status({message:"API ERROR"});
    }
}

module.exports = {NewHackathon,GetHackathon};