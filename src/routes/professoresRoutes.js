const express = require('express')
const router = express.Router()
const controller = require('../controllers/professoresController')

// //listar todos os professores /get/find
router.get('/', controller.getAll)

// //criar um novo titulo/post/save
router.post('/cadastro', controller.createProfessor)

// //listar um estudio/get/findById
router.get('/:id', controller.findByIdProfessor)

// //atualizar uma informacao especifica num estudio/patch/findById/save
router.patch('/:id', controller.updateAnythingProfessor)

// //deletar um estudio/delete/findById/remove
router.delete('/:id', controller.removeOneProfessor)


module.exports = router
