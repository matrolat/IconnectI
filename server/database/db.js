const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URL } = process.env;

const connection =()=>{
    mongoose.connect(MONGO_URL,{}).then(
    // mongoose.connect("mongodb://0.0.0.0:27017/Mern_product",{}).then(
        (data)=>{
            console.log(`mongodb connected with server ${data.connection.host}`)
        }
    ).catch(
    
        (err)=>{
            console.log(err);
        }
    )
}

module.exports  = {connection};

