const mongoose = require('mongoose')
const Agenda = require('../models/agenda')
const Aluno = require('../models/alunos')
const Professor = require('../models/professores')

const getAll = async (req, res) => {
  const agenda = await Agenda.find()
  .populate('professor')
  res.status(200).json(agenda)
}

//Busca a agenda do aluno
const findAgendaAluno = async (req, res) => {
  try{

    const aluno = await Aluno.findById(req.params.id)
    if (aluno == null){
      return res.status(404).json({message: "Aluno  não encontrado"})
    }
    const aulaAgendada = await Agenda.find({"id": aluno})
    .populate('professor')
    if (aulaAgendada == null){
      return res.status(404).json({message: "Nenhuma aula agendada"})
    }
    res.status(200).json({aulaAgendada})
}catch (err){
  res.status(400).json({ message: err.message})
}
}

//Busca a agenda do professor
const findAgendaProfessor = async (req, res) => {
  try{

    const professor = await Professor.findById(req.params.id)
    if (professor == null){
      return res.status(404).json({message: "Professor  não encontrado"})
    }
    const aulaAgendada = await Agenda.find({"professor": professor})
    .populate('professor')
    if (aulaAgendada == null){
      return res.status(404).json({message: "Nenhuma aula agendada"})
    }
    res.status(200).json({aulaAgendada})
}catch (err){
  res.status(400).json({ message: err.message})
}
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
const removeOneAula = async (req, res) => {
  try{
    const aula = await Agenda.findById(req.params.id)
 
    if (aula == null){
      return res.status(404).json({message: "Professor  não encontrado"})
    }
    
    aula.remove()
    res.status(200).json({"mensagem":"Professor removido com sucesso"})
    }

  catch (err){
    res.status(500).json({message: err.message})
  }
}



module.exports = {
    getAll,
    createAula,
    createAluno,
    findAgendaAluno,
    findAgendaProfessor,
    // updateAnythingProfessor,
    removeOneAula
    
  
}