const express = require('express')
const router = express.Router()

const controller = require('../controllers/agendaController')

router.get('/', controller.getAll)

// //criar um novo titulo/post/save
router.post('/aula', controller.createAula)

router.post('/aula/:id', controller.createAluno)

// //listar um titulo/get/findById
// router.get('/:id', controller.findByIdSchedule)

// //atualizar uma informacao especifica num titulo/patch/findById/save
// router.put('/:id', controller.updateOneSchedule)
// router.patch('/anything/:id', controller.updateAnythingSchedule)

// //deletar um titulo/delete/findById/remove
// router.delete('/:id', controller.removeOneSchedule)


module.exports = router