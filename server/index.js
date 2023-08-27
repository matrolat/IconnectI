import express, { Router } from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import bodyParser from 'body-parser'
// import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })
const app = express();

dotenv.config();
app.use('/uploads',express.static('uploads'))
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router)
const PORT = 8000;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;


connection();
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
// DefaultData();