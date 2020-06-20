"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var morgan = require('morgan');

var authRoutes = require('./routes/auth');

var analyticsRoutes = require('./routes/analytics');

var categoryRoutes = require('./routes/category');

var orderRoutes = require('./routes/order');

var positionRoutes = require('./routes/position');

var app = express();
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