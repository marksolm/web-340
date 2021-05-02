/*
=====================================================
; Title: Abdelmalak-fruits.js
; Author: Professor Cross
; Date 01 May 2021
; Description: Create a Function used in a Chai test.
=====================================================
*/
// Create a fruits() function that splits a comma separated string into an array
function getFruits(str) {
    return str.split(',');
   }
   module.exports = getFruits;