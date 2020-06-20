"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var categoryShema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    "default": ''
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
});
module.exports = mongoose.model('categories', categoryShema);