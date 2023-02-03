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
        type:Number,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    tsize: {
        type:Number,
        required:true
    },    
});

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;