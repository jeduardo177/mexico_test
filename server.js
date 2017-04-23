/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express  = require('./config/express');

var db = mongoose();

var app = express();

app.listen(3000);

console.log('Server run in http://localhost:3000/');

module.exports = app;