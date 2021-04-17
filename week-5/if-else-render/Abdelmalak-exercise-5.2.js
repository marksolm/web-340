/*
============================================
; Title:  Abdelmalak-exercise 5.2.js
; Author: Soliman Abdelmalak
; Date:   04/16/2021
; Description: EJS if else render Templates! 
;===========================================
*/
//Set up a require statement for express.
var express = require('express');

//Set up a require statement for express http library.
var http = require('http');
//set up path object that allow to find the directory where are views are saves
var path = require("path");

//Create a local variable for the express app.
var app = express();
// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));
// Tell Express to use the EJS view engine
app.set("view engine", "ejs");
// Create an array of names.
var names = ["Mark", "Joanna", "Mira", "Tota"];
// Create a function that accept and response to the request.
app.get("/", function(request, response){
    response.render("index", {
        names: names
    });
});
// create a server and output message when connected
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
  });