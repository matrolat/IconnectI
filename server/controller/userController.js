const companyUser = require("../models/companyUserSchema");
const College = require("../models/collegeUserSchema")
const UserOtp = require("../models/userOtp");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const Activation = require("../models/activationSchema");
const InternPosting = require("../models/internPostingSchema");
const Admin = require("../models/adminSchema");
const ResetPassword = require("../models/resetPasswordSchema");
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
      // const logo = req.file ? req.file.filename : null;
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
      const userExistCollege = await College.findOne({
        collegespocemail: companyspocemail,
      });

      if (userExist|| userExistCollege) {
        return res.status(422).json({ error: "User already Exists" });
      } else {
        const user = new companyUser({
          companyspocemail,
          password,
          confirmPassword,
          companyname,
          companyspocname,
          companyspocphone,
          
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
     console.log("here");
    try {
      let token;
      const { email, password } = req.body;
      console.log(req.body);
  
      if (!email || !password) {
        return res.status(422).json({ error: "Please Fill all the fields" });
      }
      const adminUser = await Admin.findOne({ adminemail: email, adminpassword:password });
      console.log("admmin"+ adminUser);
      if(adminUser)
      {
        console.log("admin user");
        return res.status(200).json(adminUser);
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
              { emailotp: OTP1, phoneotp: OTP2, createdAt: new Date() },
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
          return res.status(422).json({ error: "Invalid Credentials" });
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
              { emailotp: OTP, phoneotp: OTP, createdAt: new Date() },
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
          return res.status(422).json({ error: "Invalid Credentials" });
        }
      } else {
        return res.status(422).json({ error: "Invalid Credentials" });
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
  console.log("userexits ====="+userExist[0]);
  console.log("comp ====="+user);
  console.log("college ====="+collegeUser);
  // return;
  if(userExist[0]==null)
  {
    return res.status(422).json({ error: "Invalid OTP" });
  }
  const currentTime = new Date();
  const expirationTime = new Date(userExist[0].createdAt.getTime() + 5 * 60 * 1000);
  console.log(new Date(userExist[0].createdAt.getTime()) +" "+ currentTime + " " +expirationTime);
    if (currentTime > expirationTime) {
      // OTP has expired
      console.log("expired");
      // await UserOtp.deleteMany({ email: email });
      return res.status(422).json({ error: "expired OTP" });
    }



  if (user && !collegeUser) {
    if (userExist && userExist[0].emailotp === otp) {

      
      
    

      token = await user.generateAuthToken();
      console.log("tokencreate:"+token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 14400000),
        httpOnly: true,
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
    if (userExist && userExist[0].emailotp === otp) {

    

      token = await collegeUser.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 14400000),
        httpOnly: true,
        SameSite:"None"
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

  const logout = async (req, res) => {
  
    try {
      // res.clearCookie('jwtoken',{path:'/',domain:'localhost:3000'}); 
        res.clearCookie("jwtoken");
        res.status(200).json("Cookie deleted");
    } catch (error) {
        console.error("Error while clearing cookie:", error);
        res.status(500).send("Internal Server Error");
    }
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
        return res.status(422).json({ error: "Please Fill all the fields" });
      }
      const userExists = await College.findOne({
        collegespocemail: collegespocemail,
      });
      const userExistsCompany = await companyUser.findOne({
        companyspocemail: collegespocemail,
      });

  
      if (userExists || userExistsCompany) {
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
    const userExist = await companyUser.findOne({ companyspocemail: email });
    await companyUser.deleteOne({ companyspocemail: email });
    await UserOtp.deleteOne({ email: email });
    await Activation.deleteOne({ email: email });
    // console.log(userExist._id.toString());
    // const intern = await InternPosting.findOne({ userID: userExist._id.toString() });
    // console.log(intern);
    await InternPosting.deleteMany({ userID: userExist._id.toString() });

    res.send("deleted");
  }

  const forgotPassword = async(req,res)=>{
    const {email} = req.body;
    console.log("right now"+ JSON.stringify(req.body));
    try{
      if (!email) {
        return res.status(422).json({ error: "Please Fill all the fields" });
      }
      const userExist = await companyUser.findOne({ companyspocemail: email });
        const collegeUser = await College.findOne({ collegespocemail: email });
      if(!userExist && !collegeUser) {
        res.status(422).json({ error: "User does not exist" });
      }
      else{

        const resetUser = await ResetPassword.findOne({email:email});
        if(resetUser)
        {
          const updateData = await ResetPassword.findByIdAndUpdate(
            { _id: resetUser._id },
            { email: email, createdAt: new Date() },
            { new: true }
          );
          await updateData.save();
          console.log("date changed");
        }
        else{
          const saveData = new ResetPassword({
            email,
          });
          await saveData.save();
          console.log("reset added");
        }


        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Email for setting new password",
          text: `please click on this link to reset your password : ${process.env.CLIENT}${email}` 
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.status(422).json({ error: "email not send" });
          } else {
            console.log("email sent");
            res.status(200).json("emial sent successfullly");
          }
        });
      }
    }
    
    catch (err) {
      console.log(err);
    }
  }
  
  const checkReset = async(req,res) =>{
    const {email} = req.params;
    if(!email)
    {
      return res.status(422).json({ error: "Email is not available" });
      
    }
    const resetUser = await ResetPassword.findOne({email:email});
    const currentTime = new Date();
    const expirationTime = new Date(resetUser.createdAt.getTime() + 5 * 60 * 1000);
    console.log(new Date(resetUser.createdAt.getTime()) +" "+ currentTime + " " +expirationTime);
    if (currentTime > expirationTime) {
      
      return res.status(422).json({ error: "This link is expired" });
    }
    else{
        return res.status(200).json({ message: "Reset Password link is valid" }); 
      }
  }

  const resetPassword = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    


    try{
      if (!email || !password || !confirmPassword) {
        return res.status(422).json({ error: "Please Fill the fields" });
      }
      password = await bcrypt.hash(password, 12);
      confirmPassword = await bcrypt.hash(confirmPassword, 12);
      const userExist = await companyUser.findOne({ companyspocemail: email });
        const collegeUser = await College.findOne({ collegespocemail: email });
      if(!userExist && !collegeUser) {
        res.status(422).json({ error: "User does not exist" });
      }
      else if(userExist){
        await companyUser.updateOne(
          { companyspocemail: email },
          { $set: { 'password': password,'confirmPassword':confirmPassword } }
        );
        res.status(200).json({ message: "passworrd changed successfully" }); 
      }
      else{
        await College.updateOne(
          { collegespocemail: email },
          { $set: { 'password': password,'confirmPassword':confirmPassword } }
        );
        res.status(200).json({ message: "passworrd changed successfully" }); 
      }
    }
    
    catch (err) {
      console.log(err);
    }
    

    
  }

  //admin routes 
  const getPosting= async (req, res) => {
    let id = req.params.id;

    try{
      const Company = await companyUser.findOne({ _id: id });
      res.send(Company);
    }catch(err){
      console.log(err);
    }
  };

  module.exports = {
    companyRegistration,
    login,
    allUsers,
    otpVerify,
    logout,
    mainScreen,
    collegeRegistration,
    deleteData,
    forgotPassword,
    resetPassword,
    getPosting,
    checkReset
  };


