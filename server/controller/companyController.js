const User = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
const UserOtp = require("../models/userOtp");
const Activation = require("../models/activationSchema")
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const Posting = require("../models/internPostingSchema")
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

  const internPosting = async(req,res)=>{
      console.log(req.body.postingemail);
      try {
        const {
          name,
          areaofwork,
          startdate,
          enddate,
          stipend,
          hoursweek,
          typeofengagement,
          locationofwork,
          vacancy,
          skills,
          jobdescription,
          userID,
          uniqueID,
          postdate,
          postingemail,
        } = req.body;
    
        if (
          !name ||
          !areaofwork ||
          !startdate ||
          !enddate ||
          !stipend ||
          !hoursweek ||
          !typeofengagement ||
          !locationofwork ||
          !vacancy ||
          !skills ||
          !jobdescription ||
          !userID
        ) {
          return res.status(422).json({ error: "Please Fill the fields" });
        } else {
          const user = new Posting({
            name,
            areaofwork,
            startdate,
            enddate,
            stipend,
            hoursweek,
            typeofengagement,
            locationofwork,
            vacancy,
            skills,
            jobdescription,
            userID,
            uniqueID,
            postdate,
          });
    
          await user.save();
          const mailOptions = {
            from: process.env.EMAIL,
            to: postingemail,
            subject: "Posting confirmation email",
            text: `Congratulations!!
      You successfully posted about the Internship🙌🙌.
      Your posting ID is ${uniqueID}`,
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              res.status(422).json({ error: "email not send" });
            } else {
              console.log("email sent");
              res.status(200).json({ message: "email sent Successfully" });
            }
          });
    
          res.status(201).json({ message: "Internship Posted successfully" });
        }
      } catch (err) {
        console.log(err);
      }

  }

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


const getAllPosting=async(req,res)=>{
  try {
    const { userID } = req.body;
    console.log(userID);

    const allUsers = await Posting.find({ userID: userID });
    // console.log(allUsers);
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
}

  module.exports = {
    companyActivation,
    internPosting,
    getAllPosting,
  };


