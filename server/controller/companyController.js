const User = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
const UserOtp = require("../models/userOtp");
const Activation = require("../models/activationSchema")
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const Posting = require("../models/internPostingSchema")
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
          !hoursweek ||
          !typeofengagement ||
          !locationofwork ||
          !vacancy ||
          !skills ||
          !jobdescription ||
          !userID 
        ) {
          return res.status(422).json({ error: "Please Fill all the fields" });
        } else {
          
          const isValidDates = new Date(startdate) < new Date(enddate) && new Date(startdate) >= new Date();
          
          if (!isValidDates) {
            
            return res.status(422).json({ error: "Invalid date range. Please ensure the start date is before the end date and both are greater than or equal to today" });
          }



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
          const logo = req.file ? req.file.filename : null;
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
            return res.status(422).json({ error: "Please Fill all the fields" });
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
              logo
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


const getActivationDetails=async(req,res)=>{
  try {
    const email = req.params.email;
    console.log("email"+email);

    const data = await Activation.find({ email: email });
    console.log("data"+data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}

const getActivePostings=async(req,res)=>{
  try {
    const id= req.params.id;
    console.log(id);
    const currentDate = new Date();
    const documents = await Posting.find({ userID: id }).exec();

    // Filter documents with end dates greater than today
    const filteredDocuments = documents.filter((doc) => {
      const endDate = new Date(doc.enddate);
      return endDate > currentDate;
    });

    res.json(filteredDocuments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
const getEarlierPostings=async(req,res)=>{
  try {
    const id= req.params.id;
    console.log(id);
    const currentDate = new Date();
    const documents = await Posting.find({ userID: id }).exec();

    // Filter documents with end dates greater than today
    const filteredDocuments = documents.filter((doc) => {
      const endDate = new Date(doc.enddate);
      return endDate < currentDate;
    });

    res.json(filteredDocuments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

const updateStudentInternship=async(req,res)=>{
  try {
    const { uniqueID,studentID } = req.body;
  


    const updatedStudent = await Student.findByIdAndUpdate(
      studentID,
      { $push: { InternshipID: uniqueID } }, // Add uniqueID to the InternshipID array
      { new: true } // Return the updated document
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).json(updatedStudent);




  } catch (error) {
    console.log(error);
  }
}

const getActiveStudents =async(req,res)=>{
  try {
    const companyUserID  = req.params.id;

    const companyPostings = await Posting.find({ userID: companyUserID });

    if (companyPostings.length === 0) {
      return res.status(404).json({ message: 'No internships found for the provided company userID' });
    }
    const uniqueIDs = companyPostings.map(posting => posting.uniqueID);

    const students = await Student.find({ InternshipID: { $in: uniqueIDs } });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found for the provided company userID' });
    }

    return res.status(200).json(students);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}



  module.exports = {
    companyActivation,
    internPosting,
    getAllPosting,
    getActivationDetails,
    getActivePostings,
    getEarlierPostings,
    updateStudentInternship,
    getActiveStudents
  };


