"use strict";

var express = require('express');

var controller = require('../controllers/analytics');

var router = express.Router();
router.get('/overwiew', controller.overview);
router.get('/analytics', controller.analytics);
module.exports = router;