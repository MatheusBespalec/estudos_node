let express = require('express')
let app = express()

// Necessario para receber parametros pelos verbos http como POST e PUT por exemplo
app.use(express.urlencoded({ extended: true }))
// :nome => recebe um parametro abrigatorio
// :nome? => recebe um parametro opcional

// req.params => recebe parametros
// req.query => recebe query strings
app.get('/sobre/:dale?', (req, res) => {
    console.log(req.query)
    res.send('teste3')
})

app.get('/contato', (req, res) => {
    res.send(`
        <form method="POST" action="/contato">
            <input name="name" type="text">
            <button>Enviar</button> 
        </form>
    `)
})

app.post('/contato', (req, res) => {
    res.send('Nome informado: ' + req.body.name)
})

app.listen('3000', () => console.log('Aplicação rodando em: http://localhost:3000/sobre'))