"use strict";

var express = require('express');

var controller = require('../controllers/auth');

var router = express.Router(); //localhost:5000/api/auth/login

router.get('./login', controller.login);
module.exports = router;