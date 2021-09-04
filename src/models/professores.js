const mongoose = require('mongoose')

const professorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  graduadoEm: {
    type: String,
    required: true
  },
  disciplinas: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('professores', professorSchema)