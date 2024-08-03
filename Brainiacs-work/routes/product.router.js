// Importing express module
const express = require('express');

// Importing functions from product.controller
// addproduct: Function to add a new product
// getproduct: Function to get all products
// deleteproduct: Function to delete a product by id
// updateproduct: Function to update a product by id
// getproductbyid: Function to get a product by id
const {addproduct, getproduct, deleteproduct, updateproduct, getproductbyid} = require('../controllers/product.controller');

// Creating a new router object
const router = express.Router();

// GET request to '/': Fetch all products
router.get('/', getproduct);

// POST request to '/': Add a new product
router.post('/', addproduct);

// DELETE request to '/:id': Delete a product by id
router.delete('/:id', deleteproduct);

// PUT request to '/:id': Update a product by id
router.put('/:id', updateproduct);

// GET request to '/:id': Fetch a product by id
router.get('/:id', getproductbyid);

// Exporting the router object
module.exports.productRouter = router;