"use strict";

var express = require('express');

var authRoutes = require('./routes/auth');

var analyticsRoutes = require('./routes/analytics');

var categoryRoutes = require('./routes/category');

var orderRoutes = require('./routes/order');

var positionRoutes = require('./routes/position');

var app = express();
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);
module.exports = app;