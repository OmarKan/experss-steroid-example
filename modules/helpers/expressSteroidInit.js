/**
 * expressSteroidInit.js, initializes Express Steroid, adds any custom functions and preferences.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";


const   ExpressSteroid      = require('express-steroid');

//Add custom response handlers.
const   customHandlers      = require('./customResponseHandlers');

//Create prefs, add custom handlers to it.
const prefs = {
    resultHandlers: customHandlers
};

//Init with preferences here.
let es                      = new ExpressSteroid(prefs);


//Add custom  mappers to es.
const customMappers  = require('./customESMappers');
Object.assign(es.mappers, customMappers);

//Add custom validators to es.
const customValidators = require('./customEMValidators');
Object.assign(es.validators, customValidators);


//Export the instance so it's used everywhere.
module.exports = {
    es: es
};