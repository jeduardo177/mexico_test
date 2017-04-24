/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

// Configurar la variable 'NODE_ENV' para indicar ambiente
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Cargar las dependencias de módulos
var mongoose = require('./config/mongoose'),
    express  = require('./config/express');

// Crea conexión Mongoose a BD
var db = mongoose();

// Crea aplicación Express
var app = express();

// Usar instancia de Express para que el server escuche por el puerto '3000'
app.listen(3000);

//Indicar en consola el status del sever
console.log('Server run in http://localhost:3000/');

//Exponer instancia de la aplicación Express para uso externo
module.exports = app;