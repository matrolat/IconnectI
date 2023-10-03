const companyUser = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
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
    } catch (err) {
      console.log(err);
    }
  }


 // login=========================================================
 const login = async (req, res) =>{
     console.log("jere");
    try {
      let token;
      const { email, password } = req.body;
      console.log(req.body);
  
      if (!email || !password) {
        return res.status(422).json({ error: "Please Fill the fields" });
      }
      const userExist = await companyUser.findOne({ companyspocemail: email });
        const collegeUser = await College.findOne({ collegespocemail: email });
      // collegeUser= false;
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

  const allUsers = async(req, res) => {
    try {
      const allUsers = await College.find({});
      res.json(allUsers);
    } catch (error) {
      console.log(error);
    }
  }

  const otpVerify = async(req, res) => {
    const { email, otp } = req.body;
    console.log("test");
    console.log(email);
    

  const user = await companyUser.findOne({ companyspocemail: email });
  const collegeUser = await College.findOne({collegespocemail : email});
  const userExist = await UserOtp.find({ email: email });
  console.log("userexits ====="+userExist);
  console.log("comp ====="+user);
  console.log("college ====="+collegeUser);
  // return;
  if (user && !collegeUser) {
    if (userExist[0].emailotp === otp) {
      token = await user.generateAuthToken();
      console.log("tokencreate:"+token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 14400000),
        httpOnly: false,
        SameSite:"None"
      });
      // res.cookie("KEY", "Value", { expires: new Date((new Date()).getTime() + (10 * 86400000))});
      await companyUser.updateOne(
        { companyspocemail: email },
        { $set: { loggedin: "YES", count: 0 } }
      );

      return res.status(200).json({ message: "Company" });
    } else {
      return res.status(422).json({ error: "Invalid OTP" });
    }
  } else if (!user && collegeUser) {
    console.log("inside college");
    if (userExist[0].emailotp === otp) {
      token = await collegeUser.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 14400000),
        httpOnly: true,
      });
      await College.updateOne(
        { collegespocemail: email },
        { $set: { loggedin: "YES", count: 0 } }
      );

      return res.status(200).json({ message: "College" });
    } else {
      return res.status(422).json({ error: "Invalid OTP" });
    }
  }
  }

  const logout = async(req, res) =>{
    res.clearCookie("jwtoken");
    res.send("Cookie deleted");
  }
  
  const mainScreen = async(req,res)=>{
    console.log("lol");
    res.send(req.rootUser);
  }
  
  const collegeRegistration = async(req,res)=>{
    try {
      const {
        collegespocemail,
        password,
        confirmPassword,
        collegename,
        collegeaddress,
        collegespocname,
        collegespocphone,
        collegeregid,
        degreeoffered,
      } = req.body;
  
      if (
        !password ||
        !confirmPassword ||
        !collegename ||
        !collegeaddress ||
        !collegespocemail ||
        !collegespocname ||
        !collegespocphone ||
        !collegeregid ||
        !degreeoffered ||
        confirmPassword != password
      ) {
        return res.status(422).json({ error: "Please Fill the fields" });
      }
      const userExists = await College.findOne({
        collegespocemail: collegespocemail,
      });
  
      if (userExists) {
        return res.status(422).json({ error: "User already Exists" });
      } else {
        const user = new College({
          collegespocemail,
          password,
          confirmPassword,
          collegename,
          collegeaddress,
          collegespocname,
          collegespocphone,
          collegeregid,
          degreeoffered,
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

  const deleteData = async(req,res)=>{
    const email = req.body.email;
    console.log(email);
    await companyUser.deleteOne({ companyspocemail: email });
    await UserOtp.deleteOne({ email: email });
    res.send("deleted");
  }

  module.exports = {
    companyRegistration,
    login,
    allUsers,
    otpVerify,
    logout,
    mainScreen,
    collegeRegistration,
    deleteData
  };


