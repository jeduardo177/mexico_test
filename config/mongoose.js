/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

var config   = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    require('../app/models/post');
    return db;
};
