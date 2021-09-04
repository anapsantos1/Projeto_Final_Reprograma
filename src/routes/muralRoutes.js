const express = require('express')
const router = express.Router()
const controller = require('../controllers/muralController')

router.get('/', controller.getAll)


router.post('/', controller.createDepoimento)


module.exports = router