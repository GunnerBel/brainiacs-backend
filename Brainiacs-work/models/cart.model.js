const mongoose = require('mongoose')

const cart = new mongoose.Schema
({ 
    user_id:
    {
        type: String
    },
    product_id:
    {
        type: String
    },
    product_name:
    {
        type: String
    },
    price:
    {
        type: Number
    },
    quantity:
    {
        type: Number
    }, 

})

module.exports.Cart = mongoose.model('Cart', cart)