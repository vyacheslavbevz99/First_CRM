"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var usersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('users', usersSchema);