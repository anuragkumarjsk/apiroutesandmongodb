const mongoose = require ('mongoose')

const NoteSchema = mongoose.Schema({
    name:String,
    author:String
})

module.exports = mongoose.model('notemodel', NoteSchema)