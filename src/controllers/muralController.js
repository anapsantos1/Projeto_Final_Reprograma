const mongoose = require('mongoose')
const Mural = require('../models/mural')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const getAll = async (req, res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]
  console.log(token)
  if (!token) {
    return res.status(403).send({message: "Kd a autorizationnn"})
  }

  jwt.verify(token, SECRET, async (err) => {
    if (err){
      res.status(403).send({message: '  token não valido', err})
    }
    const mural = await Mural.find()
    res.status(200).json(mural)
  })
}
  
  const createDepoimento = async (req, res) => {
    const authHeader = req.get('Authorization');
    const token = authHeader.split(' ')[1]
    console.log(token)
    if (!token) {
      return res.status(403).send({message: "Kd a autorizationnn"})
    }
  
    jwt.verify(token, SECRET, async (err) => {
      if (err){
        res.status(403).send({message: '  token não valido', err})
      }
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
    })
  }


    module.exports = {
        getAll,
        createDepoimento
    }