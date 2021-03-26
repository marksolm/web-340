/*
============================================
; Title:  Abdelmalak-exercise-2.3.js
; Author: Soliman Abdelmalak
; Date:   03/26/2021
; Description: Exercise 2.3 – Routes
==========
*/
//Set up a require statement for express.
var express = require('express');
//Set up a require statement for express http library.
var http = require('http');
//Create a local variable for the express app.
var app = express();

//Create routes.
//Create get request root route and a function that accept and response to the request.
app.get('/', function(req, res)
{
  res.end('Welcome to homepage.\n');
});
// Create get about request.
app.get('/about', function(req, res)
{
  res.end('Welcome to the about page.\n');
});
// Create get contact request.
app.get('/contact', function(req, res)
{
  res.end('Welcome to the contact page.\n');
});
// Create a route interceptors for any bad request.
app.use(function(req, res)
{
  res.statusCode = 404; 
  res.end('404!\n');
});
//Create a node server on port 3000
http.createServer(app).listen(3000, function()
{
console.log('Application started on port %s', 3000);
});