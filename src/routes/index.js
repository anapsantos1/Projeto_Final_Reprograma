const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "API do Projeto não desista",
        "version": "1.0.0",
        "mensagem": "Heroku com Node.js integração com Mongo db"
    })
})
module.exports = router