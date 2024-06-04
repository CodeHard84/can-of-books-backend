// MongoDB Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/books');

exports.mongoose = mongoose;

// use the below when a module needs access to mongoose.
// const { mongoose } = require('./modules/db');