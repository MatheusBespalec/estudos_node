require('dotenv').config()

let express = require('express')
let app = express()

// BD Connection
let mongoose = require('mongoose')
let connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString)
    .then(() => {
        console.log('conexão realizada')
        app.emit('ok')
    })
    .catch(e => console.log(e))

let path = require('path')
let routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


app.on('ok', () => {
    app.listen('3000', () => console.log('Aplicação rodando na porta 3000'))
})