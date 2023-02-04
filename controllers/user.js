const UserModel = require("../models/User")
const AdminModel = require("../models/Admin");

const AddNewUser = async(req,res) => {

    try {
        const {name,email,phone,gender,domain,team,title} = req.body;
        const newuser = new UserModel({
            name,email,phone,gender,domain,team,title
        })
        console.log("Hello");
        await newuser.save();
        res.status(200).json({message:"User saved successfully"});

    } catch (error) {
        res.status(501).json({message:"API ERROR"});
    }
}

const GetAllUsers = async(req,res) => {
    try {
        const rest= await UserModel.find({});
        console.log(rest);
        res.status(200).json({message: rest});
    } catch (error) {
        res.status(501).json({message:error});
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


module.exports = {AddNewUser,getAdmin, GetAllUsers}
