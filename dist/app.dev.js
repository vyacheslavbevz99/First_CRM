"use strict";

var express = require('express');

var authRoutes = require('./routes/auth');

var app = express();
app.use('/api/auth' + authRoutes);
module.exports = app;