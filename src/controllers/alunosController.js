const mongoose = require('mongoose')
const Aluno = require('../models/alunos')

const getAll = async (req, res) => {
  const aluno = await Aluno.find()
  res.status(200).json(aluno)
}

const createAluno = async (req, res) => {
    const aluno = new Aluno({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      email: req.body.email,
      cidade: req.body.cidade,
      disciplinas: req.body.disciplinas,
      duvidas: req.body.duvidas,
      cursando: req.body.cursando,
      criadoEm: req.body.criadoEm
    })
    //TODO : criar validação se filme já existe
    const alunoJaExiste = await Aluno.findOne({nome: req.body.nome})
    if (alunoJaExiste) {
      return res.status(409).json({error: 'Aluno ja cadastrado.'})
    }
    try {
      const novoAluna = await aluno.save()
      res.status(201).json(novoAluna)
    } catch (err) {
      res.status(400).json({ message: err.message})
    }
  }

  const findByIdAlunos = async (req, res) => {
    try{
  
      const  idRequerido = req.params.id
  
      const aluno = await Aluno.findById(idRequerido)
      if (aluno == null){
        return res.status(404).json({message: "Estudio  não encontrado"})
      }
      res.status(200).json({aluno})
  }catch (err){
    res.status(400).json({ message: err.message})
  }
  }

  const updateAnythingAluno = async (req, res) => {
    try{
      const aluno = await Aluno.findById(req.params.id)
      if (aluno == null){
        return res.status(404).json({message: "Titulo não encontrado"})
      }
      const updatedAluno = req.body
  
      if (updatedAluno != null){
  
        let keyList = Object.keys(updatedAluno)
        keyList.forEach((conteudo) => {
          console.log('chave', conteudo);
          aluno[conteudo] = updatedAluno[conteudo];
      });
      
      }
      const alunoAtualizado = await aluno.save()
      res.status(200).json({alunoAtualizado})
  
  
    }
    catch (err){
      res.status(500).json({message: err.message})
    }
  }

  const removeOneAluno = async (req, res) => {
    try{
      const aluno = await Aluno.findById(req.params.id)
      if (aluno == null){
        return res.status(404).json({message: "Aluno  não encontrado"})
      }
      aluno.remove()
      res.status(200).json({"mensagem":"Aluno removido com sucesso"})
  
    }catch (err){
      res.status(500).json({message: err.message})
    }
  }



module.exports = {
    getAll,
    createAluno,
    removeOneAluno,
    findByIdAlunos,
    updateAnythingAluno
  
  }