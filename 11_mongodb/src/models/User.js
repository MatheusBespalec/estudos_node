let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    years: { type: Number }
})

let User = mongoose.model('User', UserSchema)

module.exports = User