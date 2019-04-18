/**
 * department.js, defines schema of a department in the system.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

const   mongoose            = require('mongoose'),
        ObjectId            = mongoose.Types.ObjectId,
        Schema              = mongoose.Schema;

const   globals             = require('../globals');


//Create the department schema.
let departmentSchema = new Schema({
    name            : {type: String, required: true},
    description     : {type: String},
    employeesCount  : {type: Number, default: 0}
}, {
    timestamps: true
});



//Export the model.
module.exports = {
    Department:   mongoose.model(globals.modelsNames.department, departmentSchema)
};//End of export.