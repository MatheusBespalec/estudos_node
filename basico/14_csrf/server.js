const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const routes = require('./routes')
const helmet = require('helmet')
const csrf = require('csurf')
const { checkCsrf, csrfToken } = require('./src/middlewares/csrf')
const { use } = require('./routes')

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => app.emit('connect_mongo'))
    .catch(e => console.log(e))

app.use(session({
    secret: 'dasdcaihncaiocmcao',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}))
// O Helmet é recomendado usar apenas em produção, sem https ele pode bloquear o carregamento de alguns recursos
// app.use(helmet())
app.use(flash())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(csrf())
app.use(checkCsrf)
app.use(csrfToken)
app.use(routes)

app.on('connect_mongo', () => {
    app.listen('3000', () => console.log('Aplicação rodando na porta 3000'))
})
