const express = require('express')
const router = express.Router()
const controller = require('../controllers/muralController')

router.get('/', controller.getAllProfessor)
router.get('/', controller.getAllAluno)


router.post('/', controller.createDepoimentoAluno)
router.post('/', controller.createDepoimentoProfessor)


module.exports = router