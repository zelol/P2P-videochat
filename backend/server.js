const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Connection to MONGODB established!');
})

const roomsRouter = require('./routes/rooms')

app.use('/rooms', roomsRouter)

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})