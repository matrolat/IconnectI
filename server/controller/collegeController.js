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


  const studentUpload = async (req, res) => {
    const { items } = req.body; // Assuming the array is sent in the request body as { "items": [["studentID1", "name1", cgpa1, "skill1,skill2", "uploadedBy1"], ["studentID2", "name2", cgpa2, "skill3,skill4", "uploadedBy2"], ...] }

    console.log(items);
    // res.send("noice");
    try {
        for (const item of items) {
            const studentID = item[0];

            // Check if a document with the same studentID exists
            const existingStudent = await Student.findOne({ studentID: studentID });

            if (existingStudent) {
                // If the studentID already exists, skip uploading this item
                // console.log(Item with studentID ${studentID} already exists. Skipping.);
                continue;
            }

            // If the studentID doesn't exist, proceed to create and save a new item
            var arrayOfItems = item[5].split(",");
            const newItem = new Student({
                studentID,
                name: item[1],
                email: item[2],
                phone: item[3],
                cgpa: item[4],
                skills: arrayOfItems,
                uploadedBy: item[6]
            });

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


