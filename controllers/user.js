const UserModel = require("../models/User")
const AdminModel = require("../models/Admin");

const AddNewUser = async(req,res) => {

    try {
        const {name,email,phone,gender,tsize} = req.body;
        const newuser = new UserModel({
            name,email,phone,gender,tsize
        })
        await newuser.save();
        res.status(200).json({message:"User saved successfully"});

    } catch (error) {
        res.status(501).json({message:"API ERROR"});
    }
}

const getAdmin = async(req,res) => {
    try {
        const phoneNumber = req.body;

        const admin = await AdminModel.findOne({phoneNumber:phoneNumber})

        if(admin){
            res.status(200).json({message:admin})
        }
        res.status(200).json({message:"No such admin exist"});
    } catch (error) {
        res.status(501).json({message:"API ERROR"});
    }
}
module.exports = {AddNewUser,getAdmin}
