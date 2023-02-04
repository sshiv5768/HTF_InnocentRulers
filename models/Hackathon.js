const mongoose = require("mongoose");

const HackathonSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc: {
        type:String
    },
    admin:{
        type:String,
        required:true
    },

});

const HackathonModel = mongoose.model('hackathon',HackathonSchema);

module.exports = HackathonModel;