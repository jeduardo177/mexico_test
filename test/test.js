/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

var assert  = require('assert'),
    should  = require('chai').should(),
    expect  = require('chai').expect,
    request = require('supertest');

var request = request("http://localhost:3000");

var post = {
            "id": "",
            "title"  : "Post by Test#1",
            "author" : "Jose Eduardo Pereira",
            "body"   : "This is a post generate by mocha test"
            };

var postUpdate = {
    "id"     : "",
    "title"  : "Post Update by Test#1",
    "author" : "Jose Eduardo Pereira",
    "body"   : "This is a Update generate by mocha test"
};


describe('Test endpoint /blogPosts post', function(){
    it('it should POST a Blog Post', function(done){
        request.post('/blogPosts')
            .set('Token', 'prueba_token')
            .send({
                title : post.title,
                author: post.author,
                body  : post.body
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.have.property('_id');
                expect(res.body._id).to.not.equal(null);
                post.id = res.body._id;
                postUpdate.id = res.body._id;
                expect(res.body).to.have.property('title');
                expect(res.body.title).to.not.equal(null);
                expect(res.body.title).eql(post.title);
                expect(res.body).to.have.property('author');
                expect(res.body.author).to.not.equal(null);
                expect(res.body.author).eql(post.author);
                expect(res.body).to.have.property('body');
                expect(res.body.body).to.not.equal(null);
                expect(res.body.body).eql(post.body);
                done();
            });
    });
});

describe('Test endpoint /blogPosts get', function(){
    it('It should GET a post by the given id', function(done){
        request.get('/blogPosts?id=' + post.id)
            .set('Token', 'prueba_token')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.have.property('_id');
                expect(res.body._id).to.not.equal(null);
                expect(res.body._id).eql(post.id);
                postUpdate.id = res.body._id;
                expect(res.body).to.have.property('title');
                expect(res.body.title).to.not.equal(null);
                expect(res.body.title).eql(post.title);
                expect(res.body).to.have.property('author');
                expect(res.body.author).to.not.equal(null);
                expect(res.body.author).eql(post.author);
                expect(res.body).to.have.property('body');
                expect(res.body.body).to.not.equal(null);
                expect(res.body.body).eql(post.body);
                done();
            });
    });
});

describe('Test endpoint /blogPosts put', function(){
    it('it should Update a Blog Post by the given id', function(done){
        request.put('/blogPosts')
            .set('Token', 'prueba_token')
            .send({
                id     : postUpdate.id,
                title  : postUpdate.title,
                author : postUpdate.author,
                body   : postUpdate.body
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.have.property('_id');
                expect(res.body._id).to.not.equal(null);
                expect(res.body._id).eql(postUpdate.id);
                expect(res.body).to.have.property('title');
                expect(res.body.title).to.not.equal(null);
                expect(res.body.title).eql(postUpdate.title);
                expect(res.body).to.have.property('author');
                expect(res.body.author).to.not.equal(null);
                expect(res.body.author).eql(postUpdate.author);
                expect(res.body).to.have.property('body');
                expect(res.body.body).to.not.equal(null);
                expect(res.body.body).eql(postUpdate.body);
                done();
            });
    });
});

