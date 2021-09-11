const express = require('express')
const router = express.Router()
const controller = require('../controllers/muralController')

router.get('/professor', controller.getAllProfessor)
router.get('/aluno', controller.getAllAluno)


router.post('/aluno', controller.createDepoimentoAluno)
router.post('/professor', controller.createDepoimentoProfessor)


module.exports = router