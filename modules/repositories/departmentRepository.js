/**
 * departmentRepository.js, manages Department Collection  in the database.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";


//Get the model.
let Department              = require('../database/department').Department;


/**
 * Adds  a new department with given data.
 * @param {Object}          data            Department data.
 * @param {Function}        cb              Callback function.
 */
exports.createDepartment = function(data, cb){
    (new Department(data)).save(cb);
};//End of createDepartment.

/**
 * Updates one department which is specified by the given filters, with given update object.
 * @param {Object}              filters         Mongoose filters object.
 * @param {Object}              update          Updated fields in the document.
 * @param {Function}            cb              Callback function.
 */
exports.updateDepartment = function(filters, update, cb){
    Department.findOneAndUpdate(filters, update, {new: true, safe: true}, cb);
};//End opf updateDepartment..