/**
 * customEMValidators.js, Defines custom Validators to be added to ExpressSteroid.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

const   ExpressSteroid      = require('express-steroid');


//Init with preferences here.
let es                      = new ExpressSteroid();


/**
 * Just an example validator.
 */
exports.isValidDepartmentName = function(name, _, next){
    if(name.length < 50) return next();
    else return next(new es.HTTPError(400, "Department name not correct"));
};//End of isValidDepartmentName.