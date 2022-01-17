require('dotenv').config()

let express = require('express')
let app = express()

let mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => app.emit('connect_mongo'))
    .catch(e => console.log(e))

let session = require('express-session')
let MongoStore = require('connect-mongo')
let flash = require('connect-flash')

app.use(session({
    secret: 'daledeledeeldoli',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}))
app.use(flash())

let path = require('path')
let routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.on('connect_mongo', () => {
    app.listen('3000', () => console.log('Aplicação rodando na porta 3000'))
})