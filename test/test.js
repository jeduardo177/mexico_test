/**
 * Created by Jose on 22/04/2017.
 */

"use strict"

var assert  = require('assert'),
    should  = require('chai').should(),
    expect  = require('chai').expect,
    request = require('supertest');

var request = request("http://localhost:3000");

var post = {
            "id": "58fc1d0220e32f1508498023",
            "title"  : "Test #01 Update2",
            "author" : "Jose E Pereira",
            "body"   : "This is the test number 02 of the service update post"
            };


describe('Endpoints test', function() {
    describe('GET', function(){
        it('/blogPosts get test, it should GET a post by the given id', function(done){
            request.get('/blogPosts?id=' + post.id)
                .set('Token', 'prueba_token')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.have.property('title');
                    expect(res.body.title).to.not.equal(null);
                    expect(res.body.title).eql(post.title);
                    expect(res.body.author).to.not.equal(null);
                    expect(res.body.author).eql(post.author);
                    expect(res.body.body).to.not.equal(null);
                    expect(res.body.body).eql(post.body);
                    done();
                });
        });
    });
});