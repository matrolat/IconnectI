const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const PORT = 4000;
app.use('/public', express.static('public'));

app.use(cookieParser());
 app.use(cors({origin:"http://localhost:3000",credentials:true}));

app.use((error, request, response, next) => {
	if (request.file) {
		fs.unlink(request.file.path, (error) => {
			console.log(error)
		})
	}
	if (response.headerSent) {
		return next(error)
	}
	response.status(error.code || 500)
	response.json({ Messages: error.message || 'An unknown error occured' })
})


app.use(require("./routes/route.js"));


const {connection} = require("./database/db");

connection();
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});