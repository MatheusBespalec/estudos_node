let fs = require('fs').promises

/*
let pathFile = path.resolve(__dirname, '..', 'test.txt')

flag 'a' faz um append, flag 'w' (default) reescreve o arquivo
fs.writeFile(pathFile, '      Frase4 \n', {flag: 'a'})
*/

module.exports = (pathFile, content) => fs.writeFile(pathFile, content, {flag: 'w'})