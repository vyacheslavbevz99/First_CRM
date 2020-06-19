"use strict";

var express = require('express');

var controller = require('../controllers/category');

var router = express.Router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router["delete"]('/:id', controller.remove);
router.post('/:', controller.create);
router.patch('/:id', controller.update);
module.exports = router;