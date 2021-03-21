/*
============================================
; Title:  Abdelmalak-Exercise 1.3.js
; Author: Soliman Abdelmalak
; Date:   03/20/2021
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/

var url = require("url");

var parsedURL = url.parse("https://github.com/marksolm/profile?name=Soliman");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
