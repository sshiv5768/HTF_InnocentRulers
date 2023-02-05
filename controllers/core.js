const CoreModel = require("../models/Core");

const RegisterCore = async(req,res) => {
    try {
        const {name,domain,phone,title} = req.body;
        const newmember = new CoreModel({name,domain,phone,title});

        await newmember.save();
        res.status(200).json({message:"Added"});
    } catch (error) {
        return res.status(501).json({message:"API ERROR"});
    }
}

const GetAllUsers = async(req,res)=>{
    try {
        const resp = await CoreModel.find({});
        res.status(200).json({message:resp})
    } catch (error) {
        return res.status(501).json({message:"API ERROR"})
    }
}

module.exports = {RegisterCore,GetAllUsers};