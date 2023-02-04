const mongoose = require("mongoose");

const OrganizationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const OrganizationModel = mongoose.model('org',OrganizationSchema);

module.exports = OrganizationModel