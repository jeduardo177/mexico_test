/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

//Carga las dependencias del modulo
var token     = require('../../app/validators/tokenValidator'),
    blogPost  = require('../../app/controllers/postController');

//Define el metodo de rutas
module.exports = function (app) {
    //Ruta para ser consumida (end point)
    app.route('/blogPosts')
        //LLama de la dependecia 'token' la funcion 'validatorToken' si es valido llama de la depencia 'blogPost' la funcion 'postCreate' para crear un post
        .post(token.validatorToken, blogPost.postCreate)
        //LLama de la dependecia 'token' la funcion 'validatorToken' si es valido llama de la depencia 'blogPost' la funcion 'getPostById' para obtener un post por id dada
        .get(token.validatorToken, blogPost.getPostById)
        //LLama de la dependecia 'token' la funcion 'validatorToken' si es valido llama de la depencia 'blogPost' la funcion 'updatePostById' para actualizar un post por id dada
        .put(token.validatorToken, blogPost.updatePostById)

    app.route('/blogPostList')
    //LLama de la dependecia 'token' la funcion 'validatorToken' si es valido llama de la depencia 'blogPost' la funcion 'listPost' para obtener una lista de post
        .get(token.validatorToken, blogPost.listPost)
}