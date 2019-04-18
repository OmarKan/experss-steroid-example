/**
 * customREsponseHandlers.js, defines response handlers to be added to Express Steroid.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

/**
 * Custom responder that returns  an error if there's one, otherwise returns the response, even if  the response is empty.
 * Passes if the value of pass is true.
 * @param {Boolean}             pass            Whether or not to pass to next middleware.
 * @param {Object}              prefs           Preferences  object.
 * @returns {Function}                          A function to handle response.
 */
exports.myResponder = function(_, res, next, pass, prefs){
    return function(err, response){
        if(err) return next(err);
        else if(response === null || response === undefined) return next(null, {});

        //Return result.
        res.status(200).json(response);

        if(pass) return next();
    }
};//End of myResponder.