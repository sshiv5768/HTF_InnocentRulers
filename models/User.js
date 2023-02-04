const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    domain: {
        type:String,
        required:true
    },   
    team: {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
});

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;