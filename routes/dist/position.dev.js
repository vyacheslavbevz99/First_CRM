"use strict";

var express = require('express');

var controller = require('../controllers/position');

var router = express.Router();
router.get('/:categoryId', controller.getByCategoryId);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router["delete"]('/:id', controller.remove);
module.exports = router;