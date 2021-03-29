/*
============================================
; Title:  Abdelmalak-assignments-2.4.js
; Author: Soliman Abdelmalak
; Date:   03/26/2021
; Description: Assignment 2.4 - EJS Views
==========
*/
//Set up a require statement for express.
var express = require('express');
//Set up a require statement for express http library.
var http = require('http');
var path = require("path");
//Create a local variable for the express app.
var app = express();
// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 
// Tell Express to use the EJS view engine
app.set("view engine", "ejs"); 
//Create routes.
//Create get request root route and a function that accept and response to the request.
app.get("/", function(req, res) 
{
   res.render("index", {
       firstName: "Soliman",
       lastName: "Abdelmalak",
       address: "philadelphia"
   });
});
  //Create a node server on port 8080
  http.createServer(app).listen(8080, function()
  {
  console.log('EJS-Views app started on port 8080');
  });
