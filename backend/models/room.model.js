const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
    name: { type: String, required: true, unique: true },
    creator: { type: String, required: true, unique: true },
    participants: { type: Array, required: true },
    log: { type: Array, required: true }
}, { timestamps: true })

const Room = mongoose.model('Room', roomSchema)

module.exports = Room