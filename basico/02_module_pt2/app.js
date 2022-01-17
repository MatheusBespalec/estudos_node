// Em modulos padões ou instalados com node não precisamos indicar o caminho 
let path = require('path')

// resolve vai resolver o caminho, dar um jeito de chegar la
console.log(path.resolve(__dirname, '..', '.', '.'))