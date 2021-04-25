/*
=====================================================
; Title: app.js
; Author: Professor Cross
; Date 23 April 2021
; Description: Application.
=====================================================
*/
// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
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
  console.log('Application connected to nLab');
});
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));
app.use(bodyParser.urlencoded({
  extended: true
}));

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

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});