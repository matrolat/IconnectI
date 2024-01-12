const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({

  email:{type:String,required:true,unique:true, dropDups: true},
  password: String,
  
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
