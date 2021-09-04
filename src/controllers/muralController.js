const mongoose = require('mongoose')
const Mural = require('../models/mural')

const getAll = async (req, res) => {
    const mural = await Mural.find()
    res.status(200).json(mural)
  }
  
  const createDepoimento = async (req, res) => {
    try {
      const mural = new Mural({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        url_do_video: req.body.url_do_video,
        descricao: req.body.descricao

      })
        const novoRecado = await mural.save()
        res.status(201).json(novoRecado)
      } catch (err) {
        res.status(400).json({ message: err.message})
      }
    }


    module.exports = {
        getAll,
        createDepoimento
    }