/*
=====================================================
; Title: Abdelmalak-exercise 7.2.js
; Author: Professor Cross
; Date 01 May 2021
; Description: Explaining how to create a TDD unit test.
=====================================================
*/

// require statement
var assert = require("assert");

describe("String#split", function() {// outputs a message

    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));// tests the array
    });
});

function getFruits(str) {
    return str.split(',');
   }
   module.exports = getFruits;