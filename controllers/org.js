const OrganizationModel = require("../models/Organization");
const bcrypt = require("bcrypt")


const RegisterOrg = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        await bcrypt.hash(password,2,async(err,hash )=>{
            const org = new OrganizationModel({
                name,
                email,
                password:hash
            });
    
            console.log(org);
            await org.save();
        })
        
        
        
        res.status(200).json({message:"Organization Added"});
   } catch (error) {
        res.status(501).json({message:"API ERROR"});
    }
}

const LoginOrg = async(req,res) =>{
    try{
        const {email,password} = req.body;
        var hashedpass;
        const org = await OrganizationModel.findOne({email:email});
        //console.log(org);
        await bcrypt.compare(password,org.password).then((result)=>{
            if(result){
                res.status(200).json({message:"Successful"})
            }
        })
            res.status(200).json({message:"Incorrect Password"});
        
    }catch(error){
        res.status(501).json({message:"API ERROR"});
    }
}

module.exports = {RegisterOrg,LoginOrg}