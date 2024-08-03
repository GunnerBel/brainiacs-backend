const express = require('express');

const {addorder , getorder, getorderbyid} = 
require('../controllers/order.controller');

const router = express.Router();

router.get('/', getorder);

router.post('/', addorder);

router.get('/:id', getorderbyid);

module.exports.orderRouter = router