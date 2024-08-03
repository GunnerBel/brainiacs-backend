const {Order} = require('../models/order.model');

exports.getorder = async (req, res) => {
    try
    {
        const orders = await Order.find()
        res.status(200).send({data:orders})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
    }

}

exports.addorder = async (req, res) => {
    try
    {
        const {user_id, product_id, quantity, product_name, price} = req.body
        const order = new Order
        (
            {
                user_id,
                product_id,
                quantity,
                product_name,
                price
            }
        )
        await order.save()
        res.status(200).send({data: order})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
}
}

exports.getorderbyid = async (req, res) => {
    try
    {
        const id = req.params.id
        const order = await Order.findById
        (
            id
        )
        if (order == null) {
            return res.send({message: 'order not found'})
        }
        res.status(200).send({data: order})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
    }
}