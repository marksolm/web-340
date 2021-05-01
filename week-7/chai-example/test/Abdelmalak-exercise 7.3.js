/*
=====================================================
; Title: Abdelmalak-exercise 7.3.js
; Author: Professor Cross
; Date 01 May 2021
; Description: Explaining how to create a Chai test.
=====================================================
*/

  // require statement
   var fruits = require("../Abdelmalak-fruits.js");
   var chai = require("chai");
   var assert = chai.assert;
   
   //describe specifications
   describe("fruits", function() {// outputs a message
       it("should return an array of fruits", function() {
           var f = fruits('Apple,Orange,Mango');
           assert(Array.isArray(f));
       });
   });