const jwt = require('jsonwebtoken');
const companyUser = require('../models/companyUserSchema');


const Authenticate = async (req,res ,next)=>{
    
  // console.log("token:"+JSON.stringify(req.jwtoken));
  console.log("token2:"+JSON.stringify(req.cookies.jwtoken));
  try {
    const token = req.cookies.jwtoken;
    
    const verifyToken = jwt.verify(token ,process.env.SECRET_KEY);
    const rootUser = await companyUser.findOne({_id: verifyToken._id , "tokens.token": token});

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();

  } catch (error) {
    res.status(401).send('Unauthorized: No token provided');
     console.log(error); 
  }
}

module.exports = Authenticate;