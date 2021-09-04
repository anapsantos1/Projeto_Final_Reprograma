const express = require('express')
const router = express.Router()
const controller = require('../controllers/professoresController')


router.get('/', controller.getAll)


router.post('/cadastro', controller.createProfessor)


router.get('/:id', controller.findByIdProfessor)


router.patch('/:id', controller.updateAnythingProfessor)

router.post('/login', controller.login)

router.delete('/:id', controller.removeOneProfessor)


module.exports = router
