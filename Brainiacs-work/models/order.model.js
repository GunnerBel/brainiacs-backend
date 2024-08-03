const mongoose = require('mongoose')

const order = new mongoose.Schema
(
    {
        user_id:
        {
            type: String
        },
        product_id:
        {
            type: String
        },
        quantity:
        {
            type: Number
        },
        product_name:
        {
            type: String
        },
        price:
        {
            type: Number
        }
    }
)

module.exports.Order = mongoose.model('Order', order)