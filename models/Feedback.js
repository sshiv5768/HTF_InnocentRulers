const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    q1:{
        type:Number,
        required:true
    },
    q2:{
        type:Number,
        required:true
    },
    q3:{
        type:Number,
        required:true
    },
    q4:{
        type:Number,
        required:true
    },
    q5:{
        type:Number,
        required:true
    },
    q6:{
        type:String,
        required:true
    }
})

const FeedbackModel = mongoose.model('feedback',FeedbackSchema);

module.exports = FeedbackModel;

