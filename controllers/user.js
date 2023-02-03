const UserModel = require("../models/User")

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


module.exports = {AddNewUser}
