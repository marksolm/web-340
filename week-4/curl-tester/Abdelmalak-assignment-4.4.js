/*
============================================
; Title:  Abdelmalak-Exercise-4.2.js
; Author: Soliman Abdelmalak
; Date:   04/08/2021
; Description: JSON API Exercise! 
;===========================================
*/

//Set up a require statement for express.
var express = require("express");
//Set up a require statement for express http library.
var http = require("http");

//Create a local variable for the express app.
var app = express();
app.set("port", process.env.PORT || 3000);
// Create a get request.
app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});

// Create a post request that request a change to the state of the server .
app.post("/", function(req, res) {
    res.send("API invoked as an HTTP POST request");
  });
// Create a put request that request a change or update to the posted .
app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});
// Create a delete request.
app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request");
});
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});