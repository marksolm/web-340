/*
============================================
; Title:  Abdelmalak-Exercise-3.2–Logging.js
; Author: Soliman Abdelmalak
; Date:   04/02/2021
; Description: Morgan Logger Example! 
;===========================================
*/
//Set up a require statement for express.
var express = require("express");
//Set up a require statement for express http library.
var http = require("http");

var path = require("path");
var logger = require("morgan");
//Create a local variable for the express app.
var app = express();
// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 
// Tell Express to use the EJS view engine
app.set("view engine", "ejs"); 
// Adding the logger
app.use(logger("short"));
// Create a function that accept and response to the request.
app.get("/", function (request, response) {
    response.render("index", {
        message: "Welcome to the Morgan Exercise 3.2–Logging!"
    });
});
//Create a node server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port 8080");
});