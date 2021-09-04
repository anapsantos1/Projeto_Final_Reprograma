const express = require('express')
const app = express()
const cors = require("cors")

//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(cors())
app.use(express.json())

const agendaRouter = require('./src/routes/agendaRoutes')
app.use('/agenda', agendaRouter)

const estudantesRouter = require('./src/routes/alunosRoutes')
app.use('/estudantes', estudantesRouter)

const indexRouter = require('./src/routes/index')
app.use("/", indexRouter)

const professoresRouter = require('./src/routes/professoresRoutes')
app.use('/professores', professoresRouter)

const muralRouter = require('./src/routes/muralRoutes')
app.use('/mural', muralRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('listening on port 8080'))