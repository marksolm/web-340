/*
=====================================================
; Title: Abdelmalak-exercise 6.3.js
; Author: Professor Cross
; Date 22 April 2021
; Description: mongoose-connection.
=====================================================
*/
// require statements
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

// connect to mongoose database
var mongoDB = 'mongodb+srv://Soliman:Abdelmalak_@cluster0.rpzcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "));
db.once('open', function() {
  console.log('Application connected to nLab');
});
var app = express();
app.use(logger("dev"));
// create a server and output message when connected
http.createServer(app).listen(5000, function() {
    console.log("Application started on port 5000!");
  });