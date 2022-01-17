module.exports.checkCsrf = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.send('<h1>Erro Csrf</h1>')
    }
}

module.exports.csrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

