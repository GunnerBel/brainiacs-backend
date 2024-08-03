// Importing express module
const express = require('express');

// Importing dotenv module to load environment variables from .env file
require('dotenv').config();

// Importing functions from index.js in models directory
// dbconnection: Function to establish a connection to the database
const {dbconnection} = require('./models/index.js');

// Importing router objects from product.router.js and order.router.js in routes directory
// productRouter: Router object for product routes
// orderRouter: Router object for order routes
const {productRouter} = require('./routes/product.router.js');
const {orderRouter} = require('./routes/order.router.js');

// Creating a new express application
const app = express();

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Getting the port number from the environment variable PORT, or defaulting to 5000
const PORT = process.env.PORT || 5000;

// Mounting productRouter at '/products' path
app.use('/products', productRouter);

// Mounting orderRouter at '/orders' path
app.use('/orders', orderRouter);

// Establishing a connection to the database
dbconnection();

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});