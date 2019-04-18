/**
 * employeeService.js, providers functionality of employees in the system.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

//Employee repository,  to perform queries.
let employeeRepo            = require('../repositories/employeeRepository');



/**
 * Adds a new employee.
 * @param {Object}                  data            Data object, contains all extracted fields, injected here by ES.
 * @param {Function}                handleResult    Default response handler by ES.
 */
exports.createEmployee = function(data, handleResult){
    employeeRepo.createEmployee(data, handleResult);
};//End of createEmployee


/**
 * Returns employees.
 * @param {Number}                  skip            For pagination, injected by Es
 * @param {Number}                  limit           For pagination, injected by ES
 * @param {Object}                  filters         Mongoose filters query object. Built by ES.
 * @param {Object|String}           sort            Mongoose sorting object or string. Built by ES.
 * @param {Function}                myResponder     A response handler defined here, added to ES using preferences.
 */
exports.getEmployees = function(skip, limit, filters, sort, myResponder){
    employeeRepo.getEmployees(skip, limit, filters, sort, myResponder);
};//End of getEmployees.


