let User = require('../models/User')

User.create({
    name: 'Roberto',
    years: 25
})
    .then(data => console.log(data))
    .then(erro => console.log(erro))

module.exports = (req, res) => res.render('index')