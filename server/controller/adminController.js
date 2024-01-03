const companyUser = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
const UserOtp = require("../models/userOtp");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const Activation = require("../models/activationSchema");
const InternPosting = require("../models/internPostingSchema");
const { internPosting } = require("./companyController");

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: "txaqbvsawqudiiht",
    },
  });


 //admin routes 
  const getPosting = async (req, res) => {
    let email=req.params.email;
    console.log(email);
    
    try{
        const User = await companyUser.find({companyspocemail:email});
        console.log(User[0]._id);
        const UserId = await InternPosting.find({ userID: User[0]._id});
        console.log("User"+UserId);
  
      res.send(UserId);
    }catch(err){
      console.log(err);
    }
  };

 /*const getCompany = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    
    try{
      
        const Id = await companyUser.find({ _id: id});
  
      res.send(Id);
    }catch(err){
      console.log(err);
    }
};*/

  

  module.exports = {
    getPosting,
  };


