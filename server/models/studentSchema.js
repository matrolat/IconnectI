const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name:String,
  cgpa:Number,
  skills:[],
  uploadedBy:String,
  
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
