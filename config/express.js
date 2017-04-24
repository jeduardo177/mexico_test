/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

// Carga las dependencias del módulo
var express = require('express'),
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// Define el método de configuración de Express
module.exports = function () {
    // Crea una nueva instancia de la aplicación Express
    var app = express();
    // Usa la variable 'NODE_ENV' para activar 'morgan' 'compress' segun ambiente
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    }

    // Uso de 'body-parser' y 'method-override'
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // Carga archivo de rutas
    require('../app/routes/postRoutes')(app);

    // Configura el servidor de archivos estáticos
    app.use(express.static('./public'));

    // Devuelve la instancia de la aplicación Express
    return app;

};