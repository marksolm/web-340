/*
============================================
; Title:  Abdelmalak-in-action.js
; Author: Soliman Abdelmalak
; Date:   03/20/2021
; Description: Recreate the Node.js Server Example 
;===========================================
*/

// Load HTTP module
const http = require("http");
// Create a function for HTTP server
function processRequest(req, res) {
  const body = "It is amazing, so far Node.js is Easy to Learn ";  
  const contentLength = body.length;
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });
   // Send the response body 
  res.end(body);
}
//Creating a server variable and displaying it in port 8080.
const s = http.createServer(processRequest);
s.listen(8080);