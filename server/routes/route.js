const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const router = express.Router();
const {companyRegistration, login, allUsers, otpVerify, logout, mainScreen, collegeRegistration, deleteData, forgotPassword,resetPassword} = require("../controller/userController")
const {getPosting,getActivations,getCollegeList,getCompanyList,getStudents,getAllInternships}=require("../controller/adminController");
const multer = require('multer');
const Authenticate = require('../middleware/authenticate');
const CollegeAuthenticate = require('../middleware/collegeAuthenticate')
const { companyActivation, internPosting, getAllPosting, getActivationDetails, getActivePostings, getEarlierPostings, updateStudentInternship, getActiveStudents } = require('../controller/companyController');
const { downloadTemplate, studentUpload, filterStudents, getAllStudents } = require('../controller/collegeController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
// const upload = multer({ dest: 'public/uploads/' })


router.get("/", (req, res) => {
    res.send("Hello router");
  });

router.post('/login/',  login);
router.post('/signup/',  companyRegistration);
router.get('/allUsers', allUsers);
router.post('/otpVerify', otpVerify);
router.get('/logout',logout);
router.get('/getLoginDetails',Authenticate, mainScreen);
router.get('/getCollegeLoginDetails',CollegeAuthenticate, mainScreen);
router.post('/collegesignup',collegeRegistration);
router.post('/activate', upload.single('logo'),companyActivation);
router.get('/getActivationDetails/:email', getActivationDetails);
router.post('/internPosting',internPosting);
router.post('/getAllPosting',getAllPosting);
router.post('/forgotPassword',forgotPassword);
router.post('/resetPassword',resetPassword);
router.get('/files/:filename', downloadTemplate);
router.post('/studentUpload', studentUpload);
router.post('/filterStudents', filterStudents);
router.get('/getAllStudents/:email',getAllStudents);
router.get('/getActivePostings/:id',getActivePostings);
router.get('/getEarlierPostings/:id',getEarlierPostings);
router.post('/updateStudentInternship',updateStudentInternship);
router.get('/getActiveStudents/:id',getActiveStudents)
// router.post('/getLoginDetails',);


//Tesing APi
router.post('/deleteUserData',deleteData);

//admin routes
router.get('/getPosting/:email',getPosting);
router.get('/getCollegeList',getCollegeList);
router.get('/getCompanyList',getCompanyList);
router.get('/getStudents/:uploadedBy',getStudents);
router.post('/getActivations',getActivations);
router.get('/getAllInternships',getAllInternships);



module.exports = router;


