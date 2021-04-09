/*
============================================
; Title:  Abdelmalak-Exercise-4.2.js
; Author: Soliman Abdelmalak
; Date:   04/08/2021
; Description: JSON API Exercise! 
;===========================================
*/
//Set up a require statement for express.
var express = require('express');

//Set up a require statement for express http library.
var http = require('http');

//Create a local variable for the express app.
var app = express();

// Create a get request.
app.get('/student/:id', function(req, res)
{
     var id = parseInt(req.params.id, 10);
     // respond to a JSON object
     res.json({
         firstName: "Soliman",
         lastName: "Abdelmalak",
         emailAddress: "domainname@gmail.com",
         studentId: id
     });
});

//Create a node server on port 8080
http.createServer(app).listen(8080, function()
{
console.log('Application started on port %s' ,8080);
});