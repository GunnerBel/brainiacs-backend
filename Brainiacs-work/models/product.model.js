const mongoose = require('mongoose')

const products = new mongoose.Schema
({
    name:
    {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    category:
    {
        type: String
    }
})

module.exports.Product = mongoose.model('Product', products)