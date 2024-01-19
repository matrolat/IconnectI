const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  cgpa: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return v >= 0 && v <= 10;
      },
      message: props => `${props.value} is not a valid CGPA! It should be between 0 and 10.`,
    },
  },
  skills: { type: Array, required: true, default: [] },
  InternshipID: {
    type: [String],
    default: [],
    required: false,
  },
  uploadedBy: { type: String, required: true },
});

// Create a unique index on the email field
studentSchema.index({ email: 1 }, { unique: true });

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
