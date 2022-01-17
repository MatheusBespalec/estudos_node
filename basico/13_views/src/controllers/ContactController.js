module.exports.form = (req, res) => res.render('contact')
module.exports.data = (req, res) => res.send('Nome: ' + req.body.name)