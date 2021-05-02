/*
  Title: app.js
 Author: Soliman Abdelmalak
  Date 23 April 2021
  Description: Application.
*/

// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var Employee = require("./models/employee");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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
app.use(logger("short"));//use morgan for logging
app.use(bodyParser.urlencoded ({  // Use Body Parser to parse the incoming request
  extended: true
}));
// Create the Employee Model
let employee = new Employee({
  firstName: "firstName",
  lastName: "lastName",
});

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

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
  })
});
// Create a function that accept and response to the products page request.
app.get("/products", function(request, response) {
 response.render("products", {
     message: "products page"
 });
});
// create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});