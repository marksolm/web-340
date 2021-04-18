/*
=====================================================
; Title: Assignment 5.3 Pug Templates
; Author: Professor Cross
; Date 16 April 2021
; Description: Creating Pug template page.
=====================================================
*/

//Set up a require statement for express.
var express = require('express');

//Set up a require statement for express http library.
var http = require('http');

//set up path object that allow to find the directory where are views are saves
var path = require("path");

var pug = require("pug")

//Create a local variable for the express app.
var app = express();
// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));
// Tell Express to use the EJS view engine
app.set("view engine", "pug");
// Create a function that accept and response to the request.
app.get("/", function(request, response){
    response.render("index", {
        message:" Welcome of using pug templating engine!"
    });
});
// create a server and output message when connected
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
  });