const mongoose = require('mongoose');

const resetPasswordSchema = new mongoose.Schema({
    
    email: String,
    createdAt: { type: Date, default: Date.now},
    
});


const ResetPassword = mongoose.model('resetPassword' ,resetPasswordSchema);

module.exports = ResetPassword;