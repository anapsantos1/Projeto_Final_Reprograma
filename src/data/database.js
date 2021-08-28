const mongoose = require('mongoose')
require('dotenv').config()
const connect = () => {mongoose.connect(
  process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }