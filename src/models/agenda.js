const mongoose = require('mongoose')

const agendaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tema: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  },
  descricao: {
    type: String,
    required: true
  },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'professores'
  },
  turma : [{
    id: mongoose.Schema.Types.ObjectId,
    ref: 'alunos'
  }] 

})

module.exports = mongoose.model('agenda', agendaSchema)