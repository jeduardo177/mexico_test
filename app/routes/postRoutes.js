/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

var token     = require('../../app/validators/tokenValidator'),
    blogPost  = require('../../app/controllers/postController');

module.exports = function (app) {
    app.route('/blogPosts')
        .post(token.validatorToken, blogPost.postCreate)
        .get(token.validatorToken, blogPost.getPostById)
        .put(token.validatorToken, blogPost.updatePostById)

    app.route('/blogPostList')
        .get(token.validatorToken, blogPost.listPost)
}