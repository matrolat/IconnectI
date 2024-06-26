const mongoose = require('mongoose');


const userOtpSchema  = new mongoose.Schema({
    email : {
        type:String , 
        required: true
    },
    emailotp : {
        type:String , 
        required: true
    },
    phoneotp : {
        type: String , 
        required: true
    },
    createdAt: { type: Date, default: Date.now},
})

const UserOtp = mongoose.model('otp' , userOtpSchema);

module.exports = UserOtp;