require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => app.emit('connect_mongo'))
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

app.use(session({
    secret: 'dnkasdkadnajdaams',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}))
app.use(flash())

const path = require('path')
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.on('connect_mongo', () => {
    app.listen('3000', () => console.log('Aplicação rodando na porta 3000'))
})