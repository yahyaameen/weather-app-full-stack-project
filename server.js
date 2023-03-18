const express = require('express')
const path = require('path')
const app = express()
const api = require('./server/routes/weatherApi')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/weatherDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

app.use('/', api)

const port = 4200
app.listen(port, function() {
    console.log(`Running on port ${port}`)
})