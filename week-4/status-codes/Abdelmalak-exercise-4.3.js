/*
============================================
; Title:  Abdelmalak-Exercise-4.3.js  
; Author: Soliman Abdelmalak
; Date:   04/08/2021
; Description: Status Codes! 
;===========================================
*/

// Set up a require statement for express.
var express = require('express');
// Set up a require statement for express http library.
var http = require('http');
var logger = require('morgan');

//Create a local variable for the express app.
var app = express();

//set up logger to dev.
app.use(logger('dev'));

// Create a get request using status code 404,and a function that accept and response to the request.
app.get('/not-found', function(req, res) {
      res.status(404);
      
      res.json({
         error: 'not found error.'
    });
});
// Create a get request using status code 200,and a function that accept and response to the request.
app.get('/ok', function(req, res) {
    res.status(200);

    res.json({
         error: 'a request was successful.'
    });
});
// Create a get request using status code 501,and a function that accept and response to the request.
app.get('/not-implemented', function(req, res) {
    res.status(501);

    res.json({
        error: 'Page not implemented.'
   });
});
 //Create a node server on port 3000
 http.createServer(app).listen(3000, function() 
{
  console.log('Application started and listening on port 3000');
});