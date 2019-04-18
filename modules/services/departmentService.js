/**
 * departmentService.js, providers functionality of departments in the system.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";


//Department repository,  to perform queries.
let departmentRepo          = require('../repositories/departmentRepository');


/**
 * Adds a new department.
 * @param {Object}                  data            Data object, contains all extracted fields, injected  here by ES.
 * @param {Function}                handleResult    Default response handler by ES.
 */
exports.createDepartment = function(data, handleResult){
    departmentRepo.createDepartment(data, handleResult);
};//End of createDepartment.

/**
 * Increments the employees count of a department with given department id.
 * This  is a side-effect function, doesn't return anything.
 * @param {String}              departmentId            Department id, injected by ES.
 */
exports.incrementEmployeesCount = function(departmentId){
    departmentRepo.updateDepartment({_id: departmentId}, {$inc: {employeesCount: 1}}, function(){});
};//End of incrementEmployeesCount.

/**
 * Updates a department with given department id, using given data.
 * @param {String}                  departmentId            Id of the target department, injected by ES.
 * @param {Object}                  data                    Data object, contains all extracted fields, injected here by ES.
 * @param {Function}                handleResult            Default response handler by ES.
 */
exports.updateDepartment = function(departmentId, data, handleResult){
    departmentRepo.updateDepartment({_id: departmentId}, data, handleResult);
};//End of updateDepartment.