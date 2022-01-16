let express = require('express')
let route = express.Router()

// Controllers
let HomeController = require('./src/controllers/HomeController')
let ContactController = require('./src/controllers/ContactController')

// Rotas
route.get('/', HomeController)

route.get('/contato', ContactController.form)
route.post('/contato', ContactController.data)

module.exports = route