/*
  Title: app.js
 Author: Soliman Abdelmalak
  Date 23 April 2021
  Description: Application.
*/

// require statements
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const Employee = require("./models/employee");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const mongoose = require('mongoose');
const helmet = require("helmet");
const { response } = require('express');

// setup csrf protection
let csrfProtection = csrf({cookie: true});

// connect to mongoose database
var mongoDB = 'mongodb+srv://Soliman:Abdelmalak_@cluster0.rpzcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "));
db.once('open', function() {
  console.log('Application connected to nLab MongoDB instance');
});

// application
var app = express();

app.use(logger("short"));//use morgan for logging
// Body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// CSRF protection
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

/**
  Sets up the view engine, view's directory path, and the server port.
 */
 app.set("views", path.resolve(__dirname, "views"));
 app.set("view engine", "ejs");
 app.set("port", process.env.PORT || 8080);

// Standard req and res function.
app.get("/", function (req, res) {
  res.render("index", {
      title: "Employee Records",
      message: "XSS Prevention Example",
  });
});
// Response to the new page
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'New Entry',
    message: "New Employee Entry Page"
  });
});

// Response to the list page
app.get("/list", function (request, response) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    if (employees.length > 0)
      response.render("list", {
        title: "List",
        employees: employees,
      });
  });
});

// post a request to the form
app.post("/process", function(request, response) {
  console.log(request.body.firstName, request.body.lastName);
  if (!request.body.firstName || !request.body.lastName) {
    response.status(400).send("Entries must have a name");
    return;
  }

// get the request's form data
const firstName = request.body.firstName;
const lastName = request.body.lastName;
console.log(firstName, lastName);

// create the employee model
const employee = new Employee({
  firstName: firstName,
  lastName: lastName,
  position: request.body.position,
  DOB: request.body.DOB,
});

// save THE new employee
employee.save(function (err) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log(firstName + " " + lastName + " saved successfully!");
  }
});
response.redirect("/list");
});

//views an employee's information
app.get("/view/:queryName", function (req, res) {
var queryName = req.params["queryName"];
Employee.find({ lastName: queryName }, function (error, employees) {
  if (error) {
    console.log(error);
    throw error;
  } else {
    console.log(employees);

    if (employees.length > 0) {
      res.render("view", {
        title: "Employee Record",
        employee: employees,
      })
    }
    else {
      response.redirect("/list")
    }
  }
});
});


// create/start Node server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});