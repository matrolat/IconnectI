const companyUser = require("../models/companyUserSchema");
const UserOtp = require("../models/userOtp");
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

const companyRegistration = async (req, res) =>{

    try {
      console.log(req.file);
      const logo = req.file ? req.file.filename : null;
      const {
        companyspocemail,
        password,
        confirmPassword,
        companyname,
        companyspocname,
        companyspocphone,
      } = req.body;
      console.log(password);
      if (
        !password ||
        !confirmPassword ||
        !companyname ||
        !companyspocemail ||
        !companyspocname ||
        !companyspocphone ||
        confirmPassword != password
      ) {
        return res.status(422).json({ error: "Please Fill the fields" });
      }
      const userExist = await companyUser.findOne({
        companyspocemail: companyspocemail,
      });

      if (userExist) {
        return res.status(422).json({ error: "User already Exists" });
      } else {
        const user = new companyUser({
          companyspocemail,
          password,
          confirmPassword,
          companyname,
          companyspocname,
          companyspocphone,
          logo,
        });

        await user.save();
        console.log(password);
        res.status(201).json({ message: "user registered successfully" });
      }

      // if(userRegister){
      //     res.status(201).json({message : "user registered successfully"});
      // }else{
      //     res.status(500).json({error : "Failed to register"});
      // }
    } catch (err) {
      console.log(err);
    }
  }
 // login=========================================================
 const login = async (req, res) =>{
     console.log("jere");
    //  const { email, password } = req.body;
    //  console.log(req.body);
     
    // return;
    try {
      let token;
    //   res.send(req.body);
    //   return;
      const { email, password } = req.body;
      console.log(req.body);
  
      if (!email || !password) {
        return res.status(422).json({ error: "Please Fill the fields" });
      }
      const userExist = await companyUser.findOne({ companyspocemail: email });
      collegeUser= false;
    //   const collegeUser = await College.findOne({ collegespocemail: email });
      console.log("hell");
      console.log(userExist);
      if (userExist && !collegeUser) {
        const isMatch = await bcrypt.compare(password, userExist.password);
  
        if (isMatch) {
          const OTP1 = Math.floor(100000 + Math.random() * 900000);
          const OTP2 = Math.floor(100000 + Math.random() * 900000);
          const emailExist = await UserOtp.findOne({ email: email });
          if (emailExist) {
            const updateData = await UserOtp.findByIdAndUpdate(
              { _id: emailExist._id },
              { emailotp: OTP1 },
              { phoneotp: OTP2 },
              { new: true }
            );
            await updateData.save();
  
            //email code
            const mailOptions = {
              from: process.env.EMAIL,
              to: email,
              subject: "Sending Email for Validation",
              text: `OTP : ${OTP1}`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
                res.status(422).json({ error: "email not send" });
              } else {
                console.log("email sent");
                res.status(200).json(userExist);
              }
            });
  
            //sms code
            //       const client = twilio(process.env.SID, process.env.AUTH_TOKEN);
            //       client.messages
            // .create({
            //   body: `your OTP is ${OTP2}`,
            //   from: process.env.PHN_NUMBER,
            //   to: '+91'+userExist.companyspocphone,
            // })
            // .then((message) => {
            //   console.log(`Message sent`);
            //   res.send('Message sent successfully');
            // })
            // .catch((error) => {
            //   console.error('Error sending message:', error);
            //   res.status(500).send('Error sending message');
            // });
          } else {
            const saveOtpData = new UserOtp({
              email,
              emailotp: OTP1,
              phoneotp: OTP2,
            });
            await saveOtpData.save();
            const mailOptions = {
              from: process.env.EMAIL,
              to: email,
              subject: "Sending Email for Validation",
              text: `OTP : ${OTP1}`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
                res.status(422).json({ error: "email not send" });
              } else {
                console.log("email sent");
                res.status(200).json(userExist);
              }
            });
  
            //       const client = twilio(process.env.SID, process.env.AUTH_TOKEN);
            //       client.messages
            // .create({
            //   body: `your OTP is ${OTP2}`,
            //   from: process.env.PHN_NUMBER,
            //   to: '+91'+userExist.companyspocphone,
            // })
            // .then((message) => {
            //   console.log(`Message sent`);
            //   res.send('Message sent successfully');
            // })
            // .catch((error) => {
            //   console.error('Error sending message:', error);
            //   res.status(500).send('Error sending message');
            // });
          }
  
          // return res.status(201).json({ message: "company" });
        } else {
          return res.status(422).json({ message: "Invalid Credentials" });
        }
      } else if (!userExist && collegeUser) {
        console.log("hiiiii");
        const isMatch = await bcrypt.compare(password, collegeUser.password);
        if (isMatch) {
          const OTP = Math.floor(100000 + Math.random() * 900000);
          const emailExist = await UserOtp.findOne({ email: email });
          console.log(emailExist);
          if (emailExist) {
            console.log("updating");
            const updateData = await UserOtp.findByIdAndUpdate(
              { _id: emailExist._id },
              { emailotp: OTP },
              { new: true }
            );
            await updateData.save();
            const mailOptions = {
              from: process.env.EMAIL,
              to: email,
              subject: "Sending Email for Validation",
              text: `OTP : ${OTP}`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
                res.status(422).json({ error: "email not send" });
              } else {
                console.log("email sent");
                res.status(200).json(collegeUser);
              }
            });
          } else {
            console.log("hello man");
            const saveOtpData = new UserOtp({
              email,
              emailotp: OTP,
              phoneotp: "none",
            });
            await saveOtpData.save();
            const mailOptions = {
              from: process.env.EMAIL,
              to: email,
              subject: "Sending Email for Validation",
              text: `OTP : ${OTP}`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
                res.status(422).json({ error: "email not send" });
              } else {
                console.log("email sent");
                res.status(200).json(collegeUser);
              }
            });
          }
          // return res.status(201).json({ message: "college" });
        } else {
          return res.status(422).json({ message: "Invalid Credentials" });
        }
      } else {
        return res.status(422).json({ message: "Invalid Credentials" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    companyRegistration,
    login
  };
