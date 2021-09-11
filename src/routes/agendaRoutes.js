const express = require('express')
const router = express.Router()

const controller = require('../controllers/agendaController')

router.get('/aluno', controller.getAllAluno)
router.get('/professor', controller.getAllProfessor)

router.post('/aula', controller.createAula)

router.post('/aula/:id', controller.IncluirAluno)

router.get('/aluno/:id', controller.findAgendaAluno)
router.get('/professor/:id', controller.findAgendaProfessor)

router.put('/aula/professor/:id', controller.updateProfessor)

router.delete('/:id', controller.removeOneAula)


module.exports = router