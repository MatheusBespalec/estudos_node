module.exports.form = (req, res) => res.render('index')
module.exports.data = (req, res) => res.send(req.body)