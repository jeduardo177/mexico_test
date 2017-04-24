/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

var mongoose = require('mongoose'),
    blogPost = mongoose.model('post');

exports.postCreate = function (req, res) {
    var post = new blogPost(req.body);
    post.save(function (err) {
        if(err){
            return res.status(400).send({
                message: errorMessage(err)
            });
        }
        else{
            res.json(post);
        }
    });
};

exports.getPostById = function(req, res) {
    blogPost.findById( req.query.id , '-__v', function(err, resp) {
        if (err) {
            return res.status(400).send({
                message: errorMessage(err)
            });
        }
        else {
            res.json(resp);
        }
    });
};

exports.updatePostById = function(req, res) {
    blogPost.findByIdAndUpdate( { _id: req.body.id } ,
        { $set: { title : req.body.title, author : req.body.author, body : req.body.body }},
        { new: true },
        function(err, resp) {
            if (err) {
                return res.status(400).send({
                    message: errorMessage(err)
                });
            }
            else {
                res.json(resp);
            }
        }
    );
};

exports.listPost = function(req, res) {

    blogPost.find({}, '-__v', function(err, resp) {
        if (err) {
            return res.status(400).send({
                message: errorMessage(err)
            });
        } else {
            res.json(resp);
        }
    });
};

var errorMessage = function (err) {
    if (err.errors){
        for (var errorName in err. errors){
            if(err.errors[errorName].message)
                return err.errors[errorName].message;
        }
    }
    else {
        return 'Unknown server error';
    }
};