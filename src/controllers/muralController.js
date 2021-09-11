const mongoose = require('mongoose')
const Mural = require('../models/mural')
const jwt = require('jsonwebtoken')
const SECRET_ALUNO = process.env.SECRET_ALUNO
const SECRET_PROFESSOR = process.env.SECRET_PROFESSOR

const getAllProfessor = async (req, res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]
  console.log(token)
  if (!token) {
    return res.status(403).send({message: "Kd a autorizationnn"})
  }

  jwt.verify(token, SECRET_PROFESSOR, async (err) => {
    if (err){
      res.status(403).send({message: '  token não valido', err})
    }
    const mural = await Mural.find()
    res.status(200).json(mural)
  })
}

const getAllAluno = async (req, res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]
  console.log(token)
  if (!token) {
    return res.status(403).send({message: "Kd a autorizationnn"})
  }

  jwt.verify(token, SECRET_ALUNO, async (err) => {
    if (err){
      res.status(403).send({message: '  token não valido', err})
    }
    const mural = await Mural.find()
    res.status(200).json(mural)
  })
}
  
  const createDepoimentoProfessor = async (req, res) => {
    const authHeader = req.get('Authorization');
    const token = authHeader.split(' ')[1]
    console.log(token)
    if (!token) {
      return res.status(403).send({message: "Kd a autorizationnn"})
    }
  
    jwt.verify(token, SECRET_PROFESSOR, async (err) => {
      if (err){
        res.status(403).send({message: '  token não valido', err})
      }else{
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
    })
  }

  const createDepoimentoAluno = async (req, res) => {
    const authHeader = req.get('Authorization');
    const token = authHeader.split(' ')[1]
    console.log(token)
    if (!token) {
      return res.status(403).send({message: "Kd a autorizationnn"})
    }
  
    jwt.verify(token, SECRET_ALUNO, async (err) => {
      if (err){
        res.status(403).send({message: '  token não valido', err})
      }else{
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
    })
  }


    module.exports = {
        getAllProfessor,
        getAllAluno,
        createDepoimentoProfessor,
        createDepoimentoAluno
    }