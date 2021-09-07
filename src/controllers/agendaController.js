const mongoose = require('mongoose')
const Agenda = require('../models/agenda')
const Aluno = require('../models/alunos')
const Professor = require('../models/professores')
//const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_ALUNO = process.env.SECRET_ALUNO
const SECRET_PROFESSOR = process.env.SECRET_PROFESSOR

const getAll = async (req, res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]
  console.log(token)
  if (!token) {
    return res.status(403).send({message: "Kd a autorizationnn"})
  }

  jwt.verify(token, SECRET_ALUNO, SECRET_PROFESSOR, async (err) => {
    if (err){
      res.status(403).send({message: '  token não valido', err})
    }
  const agenda = await Agenda.find()
  .populate('professor')
  //.populate('alunos')
  res.status(200).json(agenda)
})
}

//Busca a agenda do aluno
const findAgendaAluno = async (req, res) => {
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
  try{

    const aluno = await Aluno.findById(req.params.id)
    if (aluno == null){
      return res.status(404).json({message: "Aluno  não encontrado"})
    }
    const aulaAgendada = await Agenda.find({"id": aluno})
    .populate('professor')
    .populate('alunos')
    if (aulaAgendada == null){
      return res.status(404).json({message: "Nenhuma aula agendada"})
    }
    res.status(200).json({aulaAgendada})
}catch (err){
  res.status(400).json({ message: err.message})
}
})
}

//Busca a agenda do professor
const findAgendaProfessor = async (req, res) => {
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
  try{

    const professor = await Professor.findById(req.params.id)
    if (professor == null){
      return res.status(404).json({message: "Professor  não encontrado"})
    }
    const aulaAgendada = await Agenda.find({"professor": professor})
    .populate('professor')
    .populate('alunos')
    if (aulaAgendada == null){
      return res.status(404).json({message: "Nenhuma aula agendada"})
    }
    res.status(200).json({aulaAgendada})
}catch (err){
  res.status(400).json({ message: err.message})
}
})
}

const createAula = async (req, res) => {
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
  const agenda = new Agenda({
    _id: new mongoose.Types.ObjectId(),
    tema: req.body.tema,
    criadoEm: req.body.criadoEm,
    descricao: req.body.descricao,
    professor: req.body.professor,
    turma: [{id: req.body.id}]
  })

  
    const novoAgenda = await agenda.save().populate('alunos')
    res.status(201).json(novoAgenda)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}
})
}

//Criar um novo aluno na aula
const IncluirAluno = async (req, res) => {
  try{
    const aulaID = await Agenda.findById(req.params.id)
    if (aulaID == null){
      return res.status(404).json({message: "Aula não encontrado"})
    }else{
    //const alunoID = await Agenda.find({aulaID})

      Agenda.findByIdAndUpdate(
      aulaID,
      { $push: { alunos: req.body.id } },
      { new: true, useFindAndModify: false })
      Agenda.populate("alunos")

      //populate("alunos")

      res.status(201).send({"message": "Aluno adicionado com sucesso ", aulaID});
    }
  
    }


  
  catch (err){
    res.status(500).json({message: err.message})
  }
}

const updateProfessor = async (req, res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]
  
  if (!token) {
    return res.status(403).send({message: "Kd a autorizationnn"})
  }

  jwt.verify(token, SECRET_PROFESSOR, async (err) => {
    if (err){
      res.status(403).send({message: '  token não valido', err})
    }
  try{
    const aula = await Agenda.findById(req.params.id)
    if (aula == null){
      return res.status(404).json({message: "Aula não encontrado"})
    }

    if (req.body.professor != null){
      aula.professor = req.body.professor
    }

    const professorAtualizado = await aula.save()
    
    res.status(200).json({professorAtualizado})

  }catch (err){
    res.status(500).json({message: err.message})
  }
})
}

const removeOneAula = async (req, res) => {
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
  try{
    const aula = await Agenda.findById(req.params.id)
 
      if (aula == null){
         return res.status(404).json({message: "Aula não encontrado"})
      }else{
         aula.remove()
         res.status(200).json({"mensagem":"Aula removido com sucesso"})
    }
    

    }

  catch (err){
    res.status(500).json({message: err.message})
  }
}
})
}



module.exports = {
    getAll,
    createAula,
    IncluirAluno,
    findAgendaAluno,
    findAgendaProfessor,
    updateProfessor,
    removeOneAula
    
  
}