const User = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
const UserOtp = require("../models/userOtp");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const Activation = require("../models/activationSchema");
const InternPosting = require("../models/internPostingSchema");
const { internPosting } = require("./companyController");
const Student = require("../models/studentSchema")

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

  
//college list
const getCollegeList=async(req,res)=>{
  try {
    //const { collegespocemail } = req.body;
    console.log("Hellol");    

    const CollegeList = await College.find(); 
    res.json(CollegeList);
  } catch (error) {
    console.log(error);
  }
}

const getCompanyList=async(req,res)=>{
  try {
    //const { collegespocemail } = req.body;
    console.log("Hello");    

    const CompanyList = await User.find(); 
    res.json(CompanyList);
  } catch (error) {
    console.log(error);
  }
}

const getStudents=async(req,res)=>{
  try {
    const { uploadedBy } = req.body;
    console.log("Hello");

    const students = await Student.find({ uploadedBy: uploadedBy});
    console.log(students);
    res.json(students);
  } catch (error) {
    console.log(error);
  }
}
const getActivations=async(req,res)=>{
  try {
    const { email } = req.body;
    console.log("Hello active");

    const activations = await Activation.find({ email: email});
     console.log(activations);
    res.json(activations);
  } catch (error) {
    console.log(error);
  }
}

  

  module.exports = {
    getPosting,
    getCollegeList,
    getCompanyList,
    getStudents,
    getActivations
  };


