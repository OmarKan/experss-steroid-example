/**
 * customEMMappers.js, defines custom mappers to be added to  ExpressSteroid.s
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

const   mongoose            = require('mongoose'),
        ObjectId            = mongoose.Types.ObjectId;

/**
 * An example of a custom mapper.
 * @param {String}      value           Value to be manipulated.
 * @returns {*}                         Value after manipulation.
 */
exports.myCustomMapper = function(value){
    return value //Change the  value here.
};//End of myCustomMapper.