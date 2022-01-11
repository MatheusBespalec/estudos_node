let fs = require('fs').promises
let path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    let files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for (let file of files) {
        let fileFullPath = path.resolve(rootDir, file)
        let stats = await fs.stat(fileFullPath)

        if (/node_modules/.test(fileFullPath)) continue

        if (stats.isDirectory()) {
            readdir(fileFullPath)
            continue
        }

        console.log(fileFullPath)
    }
}

readdir(path.resolve(__dirname, '..'))