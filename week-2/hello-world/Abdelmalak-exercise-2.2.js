/*
============================================
; Title:  Abdelmalak-exercise-2.2.js
; Author: Soliman Abdelmalak
; Date:   03/26/2021
; Description: Hello World with Express 
;===========================================
*/
//Set up a require statement for express.
var express = require('express');
//Set up a require statement for express http library.
var http = require('http');
//Create a local variable for the express app.
var app = express();
// Create a function that accept and response to the request.
app.use(function(req, res)
{
  console.log('in come a request to: %s', req.url);
  res.end('Hello world\n');
})
//Create a node server on port 8080
http.createServer(app).listen(8080, function()
{
console.log('Application started on port %s' ,8080);
});