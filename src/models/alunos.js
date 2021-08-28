const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  disciplinas: {
    type: String,
    required: true
  },
  duvidas: {
    type: String,
    required: true
  },
  cursando: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('alunos', alunoSchema)