const express = require("express");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const PORT = 4000;
app.use("public/uploads/", express.static("public/uploads/"));
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(require("./routes/route.js"));


const {connection} = require("./database/db");

connection();
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});