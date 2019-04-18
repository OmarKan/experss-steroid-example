/**
 * employee.js, defines schema of an employee in the system.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

const   mongoose            = require('mongoose'),
        Schema              = mongoose.Schema,
        ObjectId            = Schema.ObjectId;

const   globals             = require('../globals');


//Create the employee schema.
let employeeSchema = new Schema({
    name            : {type: String, required: true},
    departmentId    : {type: ObjectId, ref: globals.modelsNames.department, required: true},
    phoneNumber     : {type: String},
    joiningDate     : {type: Date}
}, {
    timestamps: true
});



//Export the model.
module.exports = {
    Employee:   mongoose.model(globals.modelsNames.employee, employeeSchema)
};//End of export.