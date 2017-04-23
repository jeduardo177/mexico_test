/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var postSchema = new Schema({
    title  : { type: String, required: true},
    author : { type: String, required: true},
    body   : { type: String, required: true}
});

mongoose.model('post', postSchema);