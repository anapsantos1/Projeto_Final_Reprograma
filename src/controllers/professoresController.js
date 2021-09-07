const mongoose = require('mongoose')
const Professor = require('../models/professores')
const Agenda = require('../models/agenda')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const createProfessor = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.password, 8)
  req.body.password = senhaComHash
    const professor = new Professor({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
      cidade: req.body.cidade,
      graduadoEm: req.body.graduadoEm,
      disciplinas: req.body.disciplinas,
      criadoEm: req.body.criadoEm
    })

    //TODO : criar validação se filme já existe
    const professorJaExiste = await Professor.findOne({email: req.body.email})
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

  const login = (req, res) => {
    Professor.findOne({ email: req.body.email }, (err, professorEncontrado) => {
   
      if (!professorEncontrado) {
        return res.status(404).send({ message: 'Professor não encontrada', email: `${req.body.email}`})
      }
     console.log(professorEncontrado)

    const senhaValida = bcrypt.compareSync(req.body.password, professorEncontrado.password)
      
      if (!senhaValida) {
        return res.status(401).send({message: "Login não autorizado"})
      }
      console.log(senhaValida)
  
      const token = jwt.sign({email: req.body.email}, SECRET_PROFESSOR)
      res.status(200).send({ messagem: "Login realizado com sucesso", token: token})
  })
}

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
  const professor = await Professor.find()
  res.status(200).json(professor)
})
}

  const findByIdProfessor = async (req, res) => {
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
})
}

  const updateAnythingProfessor = async (req, res) => {
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
  })
  }

  const removeOneProfessor = async (req, res) => {
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
  })
  }


module.exports = {
    getAll,
    createProfessor,
    findByIdProfessor,
    updateAnythingProfessor,
    removeOneProfessor,
    login 
  
  }