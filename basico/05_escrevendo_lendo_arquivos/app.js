let path = require('path')
let write = require('./modules/write')
let read = require('./modules/read')

let pathFile = path.resolve(__dirname, 'test.json')
let animals = [
    { name: 'dog' },
    { name: 'cat' },
    { name: 'bird' },
    { name: 'wolf' }
]

let json = JSON.stringify(animals, '', 4)

async function readFile(file) {
    let data = await read(file)
    renderData(data)
}

function renderData(data) {
    data = JSON.parse(data)
    for (let value of data) {
        console.log(value.name)
    }
}

write(pathFile, json)
readFile(pathFile)