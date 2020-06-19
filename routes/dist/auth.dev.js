"use strict";

var express = require('express');

var controller = require('../controllers/auth');

var router = express.Router(); //localhost:5000/api/auth/login

router.post('/login', controller.login); //localhost:5000/api/auth/register

router.post('/register', controller.register);
module.exports = router;