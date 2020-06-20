"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var cors = require('cors');

var morgan = require('morgan');

var authRoutes = require('./routes/auth');

var analyticsRoutes = require('./routes/analytics');

var categoryRoutes = require('./routes/category');

var orderRoutes = require('./routes/order');

var positionRoutes = require('./routes/position');

var keys = require('./config/keys');

var app = express();
mongoose.connect(keys.mongoURL).then(function () {
  return console.log('MongoDB connected.');
})["catch"](function (error) {
  return console.log(error);
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);
module.exports = app;