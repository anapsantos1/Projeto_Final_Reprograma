const mongoose = require('mongoose')

const depoimentoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  url_do_video: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('depoimentos', depoimentoSchema)