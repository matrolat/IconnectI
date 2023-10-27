const User = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
const UserOtp = require("../models/userOtp");
const Activation = require("../models/activationSchema")
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const Posting = require("../models/internPostingSchema")
const Student = require('../models/studentSchema')
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

  
  const downloadTemplate = (request, response, next)=>{
        const directoryPath = process.env.URL + 'public/files/'
        const filename = request.params.filename
        console.log(directoryPath + filename);
        // response.setHeader('Content-Disposition', 'attachment; filename=' + filename);
        response.download(directoryPath + filename, filename, (error) => {
            if (error) {
                response.status(404).json({ message: "File not found" });
            }
        })
  }


  const studentUpload = async(req,res)=>{
        const { items } = req.body; // Assuming the array is sent in the request body as { "items": ["item1", "item2", ...] }
        console.log(items);
        try {
            for (const item of items) {

              if(!item[0] || !item[1]|| !item[2]|| !item[3]|| !item[4])
              {
                continue;
              }
            // Create a new item document and save it to the database
            var arrayOfItems = item[3].split(",");
            const newItem = new Student({ studentID:item[0] , name: item[1] , cgpa: item[2],skills:arrayOfItems ,  uploadedBy:item[4] });
            await newItem.save();
            }
            res.status(201).json({ message: 'Items saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error saving items' });
        }
  }

  function appendArraysAndRemoveDuplicates(array1, array2) {
    // Concatenate arrays
    const concatenatedArray = array1.concat(array2);
    
    // Remove duplicates using a Set
    const uniqueArray = [...new Set(concatenatedArray)];
    
    return uniqueArray;
  }



  const filterStudents =async(req,res)=>{
    try {

        const { userID } = req.body;
        console.log(userID);
    
        const allUsers = await Posting.find({ userID: userID });

        var resultArray = [];
        for (const user of allUsers) {
            // Create a new item document and save it to the database
            var skills = user.skills;
            resultArray = appendArraysAndRemoveDuplicates(resultArray, skills);
            
            }
            const filteredDocuments = await Student.find({
              skills: { $in: resultArray },
              InternshipID: { $size: 0 } // Added condition for an empty InternshipID array
            });
    
        res.json(filteredDocuments);
      } catch (err) {
        res.status(500).json({ error: 'An error occurred' });
      }
  }

  const getAllStudents =async(req,res)=>{
    try {

        const email = req.params.email;
        // res.send(email);
        // return;
        const students = await Student.find({ uploadedBy: email });
    
        res.json(students);
      } catch (err) {
        res.status(500).json({ error: 'An error occurred' });
      }
  }
  module.exports = {
   downloadTemplate,
   studentUpload,
   filterStudents,
   getAllStudents
  };


