const mongoose = require('mongoose')
const Professor = require('../models/professores')
const Agenda = require('../models/agenda')

const getAll = async (req, res) => {
  const professor = await Professor.find()
  res.status(200).json(professor)
}

const createProfessor = async (req, res) => {
    const professor = new Professor({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      email: req.body.email,
      cidade: req.body.cidade,
      graduadoEm: req.body.graduadoEm,
      disciplinas: req.body.disciplinas,
      criadoEm: req.body.criadoEm
    })

    //TODO : criar validação se filme já existe
    const professorJaExiste = await Professor.findOne({nome: req.body.nome})
    if (professorJaExiste) {
      return res.status(409).json({error: 'Professor ja cadastrado.'})
    }
    try {
      const novoProfessor = await professor.save()
      res.status(201).json(novoProfessor)
    } catch (err) {
      res.status(400).json({ message: err.message})
    }
  }

  const findByIdProfessor = async (req, res) => {
    try{
  
      const  idRequerido = req.params.id
  
      const professor = await Professor.findById(idRequerido)
      if (professor == null){
        return res.status(404).json({message: "Professor  não encontrado"})
      }
      res.status(200).json({professor})
  }catch (err){
    res.status(400).json({ message: err.message})
  }
  }

  const updateAnythingProfessor = async (req, res) => {
    try{
      const professor = await Professor.findById(req.params.id)
      if (professor == null){
        return res.status(404).json({message: "Professor não encontrado"})
      }
      const updatedProfessor = req.body
  
      if (updatedProfessor != null){
  
        let keyList = Object.keys(updatedProfessor)
        keyList.forEach((conteudo) => {
          console.log('chave', conteudo);
          professor[conteudo] = updatedProfessor[conteudo];
      });
      
      }
      const professorAtualizado = await professor.save()
      res.status(200).json({professorAtualizado})
  
    }
    catch (err){
      res.status(500).json({message: err.message})
    }
  }

  const removeOneProfessor = async (req, res) => {
    try{
      const professor = await Professor.findById(req.params.id)
   
      if (professor == null){
        return res.status(404).json({message: "Professor  não encontrado"})
      }

      const aulaAgendada = await Agenda.findOne({professor: professor})
      if(aulaAgendada){
        res.status(404).json({message: 'Existe uma aula agendada, Por favor cancelar a aula antes de remover o professor'})
      }else{

      professor.remove()
      res.status(200).json({"mensagem":"Professor removido com sucesso"})
      }
      }
  
    catch (err){
      res.status(500).json({message: err.message})
    }
  }


module.exports = {
    getAll,
    createProfessor,
    findByIdProfessor,
    updateAnythingProfessor,
    removeOneProfessor
    
  
  }