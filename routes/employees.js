/**
 * employees.js, manages Employees API routes
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

let express             = require('express');
let router              = express.Router();

let es                  = require('../modules/helpers/expressSteroidInit').es;

const Employee          = require('../modules/database/').Employee;


let employeeService     = require('../modules/services/employeeService');
let departmentService   = require('../modules/services/departmentService');


/**
 * POST API, to add a new employee
 */
router.post('/',                                                            //Define API route.
            es.extractFromSchema(Employee, false, true),                    //Extract all params for employee document.
            es.parse("departmentId", es.mappers.objectIdMapper),            //convert departmentId to Mongoose ObjectId.
            es.inject(employeeService.createEmployee, true),                //Inject the service function, true means pass to next.
            es.inject(departmentService.incrementEmployeesCount, true));    //Inject the function: "Increment employees count", true means pass to next
                                                                            //(to avoid stopping at the function, since it doesn't respond or return anything.



router.get('/',                                                                                             //Define API Route.
            es.requiredExtract('skip limit'),                                                               //Extract skip and limit, required.
            es.extract('departments joiningDateRange partialPhoneNumber sortBy'),                           //Extract optional filtering/sorting parameters.
            es.parse("skip limit", es.mappers.intMapper),                                                   //Parse skip and limit.
            es.parse('joiningDateRange', es.mappers.stringToArrayMapper(",")),                              //Parse joining date range into an array.
            es.parse('joiningDateRange', es.mappers.dateMapper),                                            //Parse date range elements.
            es.parse('departments', es.mappers.stringToArrayMapper(",")),                                   //Parse departments into an array.
            es.parse('departments', es.mappers.objectIdMapper),                                             //Parse departments array into object ids.
            es.buildQuery('joiningDateRange', "filters", es.queries.range, "joiningDate", true),            //Build joining date.
            es.buildQuery('partialPhoneNumber', "filters", es.queries.partialStringMatch, "phoneNumber"),   //Build partial phone number query.
            es.buildQuery('departments', "filters", es.queries.inArray, "departmentId"),                    //Build inArray query.
            es.buildQuery('sortBy', "sort", es.queries.sortBy),                                             //Build sortBy query.
            es.inject(employeeService.getEmployees));                                                       //Inject the service function.


//Export router.
module.exports = router;
