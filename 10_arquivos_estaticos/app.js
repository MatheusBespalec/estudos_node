let express = require('express')
let app = express()
let path = require('path')
let routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen('3000', () => console.log('Aplicação rodando na porta 3000'))