const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const router = express.Router();
const {companyRegistration, login} = require("../controller/userController")
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' })



router.post('/login/',  login);
router.post('/signup/', upload.single('logo'), companyRegistration);


module.exports = router;