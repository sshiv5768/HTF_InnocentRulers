const OrganizationModel = require("../models/Organization");
const bcrypt = require("bcrypt")

const RegisterOrg = async (req,res) => {
    try {
        const {name,email,password} = req.body;

        await fetch('https://api.apyhub.com/validate/email/dns',
        {
            method:"post",
            body:JSON.stringify({
                "email":email
            }),
            headers:{
                "apy-token":"APT0XzXnR7Ue1l8Zc17qkTqROXLNoKmRbkLdP0P4ENICW3Dov",
                "Content-Type":"application/json"
            }
        })
        .then((result)=>{
            return result.json();
        })
        .then((re)=>{
            console.log(re);
            if(!re.data){
                res.status(200).json({message:"Please Enter an organization Email"})
            }
        })


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