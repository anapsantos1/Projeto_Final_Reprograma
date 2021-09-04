const express = require('express')
const router = express.Router()
const controller = require('../controllers/alunosController')

router.get('/', controller.getAll)

router.post('/cadastro', controller.createAluno)

router.get('/:id', controller.findByIdAlunos)

router.patch('/anything/:id', controller.updateAnythingAluno)

router.delete('/:id', controller.removeOneAluno)


module.exports = router