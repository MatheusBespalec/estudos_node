let firstName = 'Matheus'
let lastName = 'bespalec'

function printName() {
    console.log(firstName, lastName)
}

// Os 3 modos de se exportar com node
module.exports.firstName = firstName
exports.lastName = lastName
this.printName = printName

// console.log(module.exports)