"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var positionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    require: true
  },
  category: {
    ref: 'categories',
    type: Schema.Types.ObjectId
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
});
module.exports = mongoose.model('position', positionSchema);