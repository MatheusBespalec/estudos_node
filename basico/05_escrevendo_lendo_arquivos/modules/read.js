let fs = require('fs').promises

module.exports = file => fs.readFile(file, 'utf8')