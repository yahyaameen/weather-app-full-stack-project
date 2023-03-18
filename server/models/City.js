const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temp: Number,
    description: String,
    icon: String,
})

const City = mongoose.model("City", citySchema)
module.exports = City