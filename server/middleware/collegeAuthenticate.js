const jwt = require('jsonwebtoken');
const collegeUser = require('../models/collegeUserSchema');


const collegeAuthenticate = async (req,res ,next)=>{
    
  console.log("token:"+JSON.stringify(req.jwtoken));
  try {
    const token = req.cookies.jwtoken;
    
    const verifyToken = jwt.verify(token ,process.env.SECRET_KEY);
    const rootUser = await collegeUser.findOne({_id: verifyToken._id , "tokens.token": token});

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();

  } catch (error) {
    res.status(401).send('Unauthorized: No token provided');
     console.log(error); 
  }
}

module.exports = collegeAuthenticate;