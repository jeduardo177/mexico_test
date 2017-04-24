/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

// Carga las dependencias del modulo
var config   = require('./config'),
    mongoose = require('mongoose');

// Define el método de configuración de Mongoose
module.exports = function () {
    // Uso Mongoose para conectar a MongoDB
    var db = mongoose.connect(config.db);
    // Carga el modelo
    require('../app/models/post');
    // Devolver la instancia de conexión a Mongoose
    return db;
};
