/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

//Carga las dependencias del modulo
var mongoose = require('mongoose'),
    blogPost = mongoose.model('post');

//Metodo 'postCreate' crea un nuevo post en BD
/*
json esperado:
{
    "title"  : "Post test #5",
    "author" : "Jose Eduardo Pereira",
    "body"   : "Test #5 body"
}
respuesta valida dada:
 {
 "__v": 0,
 "title": "Post test #5",
 "author": "Jose Eduardo Pereira",
 "body": "Test #5 body",
 "_id": "58fde444283dbe585c1e46e5"
 }
*/
exports.postCreate = function (req, res) {
    //Inicializa el post a guardar en BD utilizando el constructor del modelo 'post'
    var post = new blogPost(req.body);
    //Usa funcion 'save' de mongoose para guardar el nuevo post
    post.save(function (err) {
        //Devuelve error si se consigue alguno
        if(err){
            return res.status(400).send({
                message: errorMessage(err)
            });
        }
        //Si el guardado es exitoso retorna 'post' creado
        else{
            res.json(post);
        }
    });
};

//Metodo 'getPostById' busca un post en BD a partir de una id
//Dato esperado por el servicio 'id'
/*
respuesta valida dada:
{
    "_id": "58fde42c283dbe585c1e46e2",
    "title": "Post test #2",
    "author": "Jose Eduardo Pereira",
    "body": "Test #2 body"
}*/
exports.getPostById = function(req, res) {
    //Usa funcion 'findById' de mongoose para ejecutar query
    blogPost.findById( req.query.id , '-__v', function(err, resp) {
        //Devuelve error si se consigue alguno
        if (err) {
            return res.status(400).send({
                message: errorMessage(err)
            });
        }
        //Si la busqueda es exitoso retorna 'post' encontrado
        else {
            res.json(resp);
        }
    });
};

//Metodo 'updatePostById' busca un post en BD a partir de una id y lo actualiza
/*
json esperado:
{
    "id": "58fde444283dbe585c1e46e5",
    "title": "Post test #5 update7",
    "author": "Jose Eduardo Pereira",
    "body": "Test #5 body update7"
}
respuesta valida dada:
 {
 "_id": "58fde444283dbe585c1e46e5",
 "title": "Post test #5 update7",
 "author": "Jose Eduardo Pereira",
 "body": "Test #5 body update7",
 "__v": 0
 }
*/
exports.updatePostById = function(req, res) {
    //Usa funcion 'findByIdAndUpdate' de mongoose para ejecutar query y ejecutar el update
    blogPost.findByIdAndUpdate( { _id: req.body.id } ,
        { $set: { title : req.body.title, author : req.body.author, body : req.body.body }},
        { new: true },
        function(err, resp) {
            //Devuelve error si se consigue alguno
            if (err) {
                return res.status(400).send({
                    message: errorMessage(err)
                });
            }
            //Si el update es exitoso retorna 'post' actualizado
            else {
                res.json(resp);
            }
        }
    );
};

//Metodo 'listPost' retorna una lista de post
exports.listPost = function(req, res) {
    //Usa funcion 'find' de mongoose para ejecutar query
    blogPost.find({}, '-__v', function(err, resp) {
        //Devuelve error si se consigue alguno
        if (err) {
            return res.status(400).send({
                message: errorMessage(err)
            });
        }
        //Si es exitoso retorna lista
        else {
            res.json(resp);
        }
    });
};

//Metodo para manejo de errores
var errorMessage = function (err) {
    //Si consigue algun error conocido lo retorna
    if (err.errors){
        for (var errorName in err. errors){
            if(err.errors[errorName].message)
                return err.errors[errorName].message;
        }
    }
    //Si no consigue el error
    else {
        return 'Unknown server error';
    }
};