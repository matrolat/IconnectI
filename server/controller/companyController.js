const User = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
const UserOtp = require("../models/userOtp");
const Activation = require("../models/activationSchema")
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
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

const companyActivation = async(req,res)=>{

        try {
          console.log(req.body);
          const {
            websiteinfo,
            industrytype,
            areaofwork,
            registeredoffice,
            companyregno,
            currentlocation,
            locationofwork,
            employeecount,
            compdescription,
            email,
          } = req.body;
      
          if (
            !websiteinfo ||
            !industrytype ||
            !areaofwork ||
            !registeredoffice ||
            !companyregno ||
            !currentlocation ||
            !locationofwork ||
            !employeecount ||
            !compdescription ||
            !email
          ) {
            return res.status(422).json({ error: "Please Fill the fields" });
          }
          const userExists = await Activation.findOne({ companyregno: companyregno });
      
          if (userExists) {
            return res.status(422).json({ error: "User already Exists" });
          } else {
            const company = await User.findOne({ companyspocemail: email });
            console.log(company.companyspocemail === email);
      
            await User.updateOne(
              {
                companyspocemail: email,
              },
              { $set: { deactivate: "NO" } }
            );
            const user = new Activation({
              websiteinfo,
              industrytype,
              areaofwork,
              registeredoffice,
              companyregno,
              currentlocation,
              locationofwork,
              employeecount,
              compdescription,
              email,
            });
            await user.save();
            // res.status(201).json({message : "Profile Updated successfully"});
      
            // var companyData = await Activation.aggregate([
            //   {
            //     $lookup:{
            //          from:"internshippostings",
            //          localField:"internshipposting",
            //          foreignField:"_id",
            //          as:"internshipinfo"
            //     }
            //   }
            // ]);
      
            // await companyData.save();
            console.log(companyregno);
            res.status(201).json({ message: "Profile Updated successfully" });
          }
        } catch (err) {
          console.log(err);
        }
    
}

  module.exports = {
    companyActivation,
  };


