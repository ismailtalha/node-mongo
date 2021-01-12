var express = require('express');
const app = express();
const mongoose = require("mongoose");
const studentcontroller = require('./controller/student');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.connectionString, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use("/student", studentcontroller);
app.listen(process.env.PORT || 1000, function () {
  console.log(`listening on ${process.env.PORT}`)
})