const {Product} = require('../models/product.model');

exports.getproduct = async (req, res) => { 
    try
    {
        const products = await Product.find()
        res.status(200).send({data:products})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
    }
}

exports.addproduct = async (req, res) => {
    try
    {
        const {name, price, category} = req.body
        const product = new Product
        (
            {
                name,
                price,
                category
            }
        )
        await product.save()
        res.status(200).send({data: product})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
    }

}
 
exports.deleteproduct = async (req, res) => {
    try
    {
        const id = req.params.id
        const product = await Product.findByIdAndDelete
        (
            id
        )
        if (product == null) {
            return res.send({message: 'product not found'})
        }
        res.status(200).send({data: product})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
    }
}

exports.updateproduct = async (req, res) => {
    try
    {
        const id = req.params.id
        const product = await Product.findByIdAndUpdate
        (
            id, req.body
        )
        if (product == null) {
            return res.send({message: 'product not found'})
        }
        res.status(200).send({data: product})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
    }
}

exports.getproductbyid = async (req, res) => {
    try
    {
        const id = req.params.id
        const product = await Product.findById
        (
            id
        )
        if (product == null) {
            return res.send({message: 'product not found'})
        }
        res.status(200).send({data: product})
    }
    catch (error)
    {
        res.status(500).send({message: error.message})
    }
}

