/**
 * init.js initializes the database.
 * ExpressSteroid_Example, 2018.
 * Omar Kanawati.
 */

let mongoose        = require('mongoose');


/**
 * Database config
 */
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/ExpressSteroidTest");


mongoose.connection.on('error', function(err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    throw err
});

mongoose.connection.on('connected', function(){
    console.log("Connected to MongoDB");
});