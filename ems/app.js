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

// setup csrf protection
let csrfProtection = csrf({cookie: true});


// connect to mongoose database
var mongoDB = 'mongodb+srv://Soliman:Abdelmalak_@cluster0.rpzcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "));
db.once('open', function() {
  console.log('Application connected to nLab MongoDB instance');
});
var app = express();

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
 app.set("views", path.resolve(__dirname, "views"));
 app.set("view engine", "ejs");
 app.set("port", process.env.PORT || 8080);
 
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


// Create the Employee Model
let employee = new Employee({
  firstName: "firstName",
  lastName: "lastName",
});

app.get('/new', function(req, res) {
  res.render('new', {
    title: 'New Entry',
    message: "New Employee Entry Page"
  });
})

app.get("/", function (request, response) {
 
  response.render("index", {

      title: "Home page"
  });
});

// Create a function that accept and response to the about page request.
app.get("/about", function(request, response) {
  response.render("about", {
      message: "about page"
  });
});
// Create a function that accept and response to the contact page request.
app.get("/contact", function(request, response) {
  response.render("contact", {
      message: "contact page"
  });
});
// Create a function that accept and response to the products page request.
app.get("/products", function(request, response) {
 response.render("products", {
     message: "products page"
 });
});

 // http calls
app.get("/", function(request, response) {
  response.render("index", {
      message: "XSS Prevention Example"
  });

});
app.post("/process", function(request, response) {
  console.log(request.body.txtName);
  response.redirect("/");
});

// create/start Node server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});