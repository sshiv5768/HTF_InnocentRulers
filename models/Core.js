const mongoose = require("mongoose");

const CoreSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
})

const CoreModel = mongoose.model('core',CoreSchema);

module.exports = CoreModel;