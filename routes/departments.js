/**
 * departments.js, manages Department API routes
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";


let express             = require('express');
let router              = express.Router();

let es                  = require('../modules/helpers/expressSteroidInit').es;
const Department        = require('../modules/database').Department;


let departmentService   = require('../modules/services/departmentService');


/**
 * POST api, to add new department.
 */
router.post('/',                                                                         //Define route.
            es.extractFromSchema(Department, false, true, ['_id', 'employeesCount']),   //Extract all params, except for _id, and employeesCount  for employee document.
            es.validate('name', es.validators.isValidDepartmentName),                   //Using custom validator, validate name of department.
            es.inject(departmentService.createDepartment));                             //Inject the service function.


/**
 * PUT api, to update an existing department.
 */
router.put("/:departmentId",
            es.requiredExtract("departmentId"),                     //Define route.
            es.extract('name description'),                         //Extracted fields: name, and description.
            es.parse('departmentId', es.mappers.objectIdMapper),    //Convert departmentId from String into Mongoose ObjectId.
            es.inject(departmentService.updateDepartment));         //Inject the service function.

//Export router.
module.exports = router;
