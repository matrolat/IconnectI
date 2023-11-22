const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentID:{type:String,required:true,unique:true, dropDups: true},
  name:String,
  cgpa:Number,
  skills:[],
  InternshipID: {
    type: [String], // This defines that InternshipID is an array of strings
    default: [], // Default value is an empty array
    required: false, // Not required
  },
  uploadedBy:String,
  
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
