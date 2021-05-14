/*
 ; Title:  employee.js
 ; Author: Soliman Abdelmalak
 ; Date:   01 May 2021
 ; Description: File for the Employee database model.
*/
//require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Employee Schema
let employeeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    position: {type: String, required: true},
    DOB: {type: String, required: true},
  });
  // define the employee model
var Employee = mongoose.model("Employee", employeeSchema);

//expose the employee to calling files
module.exports = Employee;