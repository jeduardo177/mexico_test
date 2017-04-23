/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

var express = require('express'),
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {

    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    require('../app/routes/postRoutes')(app);

    app.use(express.static('./public'));

    return app;

};