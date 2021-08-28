const mongoose = require('mongoose')
const Agenda = require('../models/agenda')

const getAll = async (req, res) => {
  const agenda = await Agenda.find()
  .populate('professor')
  res.status(200).json(agenda)
}

const createAula = async (req, res) => {
  const agenda = new Agenda({
    _id: new mongoose.Types.ObjectId(),
    tema: req.body.tema,
    criadoEm: req.body.criadoEm,
    descricao: req.body.descricao,
    professor: req.body.professor,
    turma: req.body.turma
  })
  //TODO : criar validação se filme já existe
  // const agendaJaExiste = await Agenda.findOne({tema: req.body.tema})
  // if (agendaJaExiste) {
  //   return res.status(409).json({error: 'Agenda ja cadastrado.'})
  // }
  try {
    const novoAgenda = await agenda.save()
    res.status(201).json(novoAgenda)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

//Criar um novo aluno na aula
const createAluno = (req, res) => {

  const agenda = Agenda.findById(req.params.id)
  if (agenda == null){
    return res.status(404).json({message: "Aluno  não encontrado"})
  }
  const turma = Agenda.turma;
  const aluno = ({
    nome: req.body.nome,
    id: req.body.id,
  })
    const alunoJaExiste = aluno.findOne({nome: req.body.nome})
  if (alunoJaExiste) {
    return res.status(409).json({error: 'Aluno ja cadastrado.'})
  }
  try {
    const novoAluno = aluno.save()
    res.status(201).json(novoAluno)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}



module.exports = {
    getAll,
    createAula,
    createAluno
    // findByIdProfessor,
    // updateAnythingProfessor,
    // removeOneProfessor
    
  
}