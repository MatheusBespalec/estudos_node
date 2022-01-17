module.exports = (req, res) => {
    // Criar sessao
    // req.session.name = 'Teste'

    // Criar flash message
    // req.flash('info', 'dale')   
    // Recuperar flash message 
    console.log(req.flash('info'))    
    res.render('index')
}