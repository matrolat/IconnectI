const mongoose = require('mongoose');

const postingSchema = new mongoose.Schema({
    name:String,
    areaofwork: String,
    startdate:String,
    enddate:String,
    stipend: {
        type: Number,
        default: 0,
        required: false, // Set required to false
    },
    hoursweek:Number,
    locationofwork : String,
    typeofengagement:String,
    vacancy:Number,
    userID: String,
    uniqueID:String,
    skills:[],
    jobdescription:String,
    postdate:String,
    
});


const Posting = mongoose.model('internshipPosting' ,postingSchema);

module.exports = Posting;