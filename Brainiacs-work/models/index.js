const mongoose = require('mongoose');

const db_url = process.env.MONGODB_CONNECTION
const dbconnection = async () => {
    try {
        await mongoose.connect(db_url);
        console.log('database connected');
    } catch (error) {
        console.log(error);
        throw new error('error in connecting to database');
    }
}
module.exports = {
    dbconnection
}