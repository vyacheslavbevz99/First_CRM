const express = require('express')
const controller = require('../controllers/analytics')
const router = express.Router()


router.get('/overwiew', controller.overview)
router.get('/analytics', controller.analytics)

module.exports = router