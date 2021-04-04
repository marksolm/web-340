/*
============================================
; Title:  Abdelmalak-assignment-3.4.js
; Author: Soliman Abdelmalak
; Date:   04/02/2021
; Description: Putting it all together! 
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
// Create a function that accept and response to the home page request.
app.get("/", function(request, response) {
    response.render("index", {
        message: "home page"
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
//Create a node server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port 8080");
});