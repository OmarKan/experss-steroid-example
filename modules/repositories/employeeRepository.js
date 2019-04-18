/**
 * employeeRepository.js, manages Employee Collection  in the database.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

//Get the Employee Model.
let Employee                = require('../database/employee').Employee;


/**
 * Adds a new employee to the database.
 * @param {Object}          data            Employee data to be added.
 * @param {Function}        cb              Callback function.
 */
exports.createEmployee = function(data, cb){
    (new Employee(data)).save(cb);
};//End of createEmployee.

/**
 * Gets employess data.
 * @param {Number}          skip            For pagination.
 * @param {Number}          limit           For pagination.
 * @param {Object}          filters         Mongoose filters query object.
 * @param {Object|String}   sort            Mongoose sorting object or string.
 * @param {Function}        cb              Callback function.
 */
exports.getEmployees = function(skip, limit, filters, sort, cb){
    let query = Employee.find(filters || {});
    if(sort) query = query.sort(sort);
    return query.skip(skip || 0).limit(limit || 50).exec(cb);
};//End of getEmployees.