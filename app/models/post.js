/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

//Carga las dependencias
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

//Define un nuevo schema 'postSchemapostSchema'
var postSchema = new Schema({
    title  : { type: String, required: true},
    author : { type: String, required: true},
    body   : { type: String, required: true}
});

//Crear el modelo 'post' a partir del schema 'postSchema'
mongoose.model('post', postSchema);