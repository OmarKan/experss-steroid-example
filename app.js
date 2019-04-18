/**
 * app.js, Creates the app, and initializes routes.
 * Omar Kanawati.
 * ExpressSteroid_Example, 2018.
 */

"use strict";

let express             = require('express');
let path                = require('path');
let bodyParser          = require('body-parser');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employees', require('./routes/employees'));
app.use('/departments', require('./routes/departments'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  return res.status(err.status || 500).json(err.message);
});


//Export the app.
module.exports = app;