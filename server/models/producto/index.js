const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Producto = new Schema({
    title: String,
    description: String,
    price: { type: Number, default: 0 }
})

module.exports = mongoose.model('Producto', Producto)