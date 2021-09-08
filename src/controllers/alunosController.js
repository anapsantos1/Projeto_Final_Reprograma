const mongoose = require('mongoose')
const Aluno = require('../models/alunos')
const Agenda = require('../models/agenda')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_ALUNO = process.env.SECRET_ALUNO
const SECRET_PROFESSOR = process.env.SECRET_PROFESSOR


const createAluno = async (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.password, 8)
    req.body.password = senhaComHash
    const aluno = new Aluno({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
      cidade: req.body.cidade,
      disciplinas: req.body.disciplinas,
      duvidas: req.body.duvidas,
      cursando: req.body.cursando,
      criadoEm: req.body.criadoEm
    })
  
    const alunoJaExiste = await Aluno.findOne({email: req.body.email})
    if (alunoJaExiste) {
      return res.status(409).json({error: 'Aluno ja cadastrado.'})
    }else{
    try {
      const novoAluna = await aluno.save()
      res.status(201).json(novoAluna)
    } catch (err) {
      res.status(400).json({ message: err.message})
    }
  }
  }

  const login = (req, res) => {
    Aluno.findOne({ email: req.body.email }, (err, alunoEncontrado) => {
   
      if (!alunoEncontrado) {
        return res.status(404).send({ message: 'Aluno não encontrada', email: `${req.body.email}`})
      }
     console.log(alunoEncontrado)

    const senhaValida = bcrypt.compareSync(req.body.password, alunoEncontrado.password)
      
      if (!senhaValida) {
        return res.status(401).send({message: "Login não autorizado"})
      }
      console.log(senhaValida)
  
      const token = jwt.sign({email: req.body.email}, SECRET_ALUNO)
      res.status(200).send({ messagem: "Login realizado com sucesso", token: token})
  })
}

const getAll = async (req, res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]
  if (!token) {
    return res.status(403).send({message: "Kd a autorizationnn"})
  }

  jwt.verify(token, SECRET_PROFESSOR, async (err) => {
    if (err){
      res.status(403).send({message: '  token não valido', err})
    }
    const aluno = await Aluno.find()
    res.status(200).json(aluno)
  })
  
}
  

  const findByIdAlunos = async (req, res) => {
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
  })
}

  const updateAnythingAluno = async (req, res) => {
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
  })
}

  const removeOneAluno = async (req, res) => {
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
          try{
            
            const aluno = await Aluno.findById(req.params.id)
            const aulaAgendada = await Agenda.findOne({id: req.params.id })
            if (aluno == null){
              return res.status(404).json({message: "Aluno  não encontrado"})
            }else{

            console.log(aulaAgendada)
              if(aulaAgendada){
                res.status(404).json({message: 'Existe uma aula agendada, Por favor cancelar a aula antes de remover o professor'})
              }
              else{
              aluno.remove()
              res.status(200).json({"mensagem":"Aluno removido com sucesso"})
              }
          }
        
          }catch (err){
            res.status(500).json({message: err.message})
          }
      }
  })
}



module.exports = {
    getAll,
    createAluno,
    removeOneAluno,
    findByIdAlunos,
    updateAnythingAluno,
    login 
  
  }