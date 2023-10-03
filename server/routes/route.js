const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const router = express.Router();
const {companyRegistration, login, allUsers, otpVerify, logout, mainScreen, collegeRegistration, deleteData} = require("../controller/userController")
const multer = require('multer');
const Authenticate = require('../middleware/authenticate');
const { companyActivation, internPosting, getAllPosting } = require('../controller/companyController');
const upload = multer({ dest: 'public/uploads/' })



router.post('/login/',  login);
router.post('/signup/', upload.single('logo'), companyRegistration);
router.get('/allUsers', allUsers);
router.post('/otpVerify', otpVerify);
router.get('/logout',logout);
router.get('/getLoginDetails',Authenticate, mainScreen);
router.post('/collegesignup',collegeRegistration);
router.post('/activate',companyActivation);
router.post('/internPosting',internPosting);
router.post('/getAllPosting',getAllPosting);
// router.post('/getLoginDetails',);


//Tesing APi
router.post('/deleteUserData',deleteData);

module.exports = router;