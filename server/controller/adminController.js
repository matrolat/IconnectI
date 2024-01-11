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
    console.log("email");
    let email=req.params.email;
    
    try{
        const user = await User.find({companyspocemail:email});
        console.log(user[0]._id);
        const UserId = await InternPosting.find({ userID: user[0]._id});
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
    console.log(CompanyList);
    const limitedData = CompanyList.map(({ companyname,companyspocname, companyspocemail,companyspocphone }) => ({
      companyname,
      companyspocname,
      companyspocemail,
      companyspocphone
    }));
    
    res.json(limitedData);
  } catch (error) {
    console.log(error);
  }
}

const getStudents=async(req,res)=>{
  try {
    const { uploadedBy } = req.params;
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

const getAllInternships = async(req, res)=>{
  try{
    console.log("Hello active");

    const allInternships = await InternPosting.find();
      console.log(allInternships);
    res.json(allInternships);
  }catch (error) {
    console.log(error);
  }

}
  

  module.exports = {
    getPosting,
    getCollegeList,
    getCompanyList,
    getStudents,
    getActivations,
    getAllInternships
  };


