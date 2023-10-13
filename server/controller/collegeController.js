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
            // Create a new item document and save it to the database
            const newItem = new Student({ name: item[0] , cgpa: item[1],skills:item[2] ,  uploadedBy:item[3] });
            await newItem.save();
            }
            res.status(201).json({ message: 'Items saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error saving items' });
        }
  }

  module.exports = {
   downloadTemplate,
   studentUpload
  };


