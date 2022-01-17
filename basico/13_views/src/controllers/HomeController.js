module.exports = (req, res) => {
    res.render('index', {
        title: 'Meu titulo',
        text: 'Meu <u>texto</u> de teste',
        numbers: [2, 6, 99, 345, 54]
    })
}