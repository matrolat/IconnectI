const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const PORT = 4000;
app.use('/public', express.static('public'));
// const corsOptions = {
//      origin: '', 
//     credentials: true, 
//   };
//   const corsConfig = {
//   credentials: true,
 
// };
// app.use(cors());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:3000",credentials:true}));
// app.use(cors(corsOptions));
// app.use(cors({credentials:true}));

app.use(require("./routes/route.js"));


const {connection} = require("./database/db");

connection();
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});