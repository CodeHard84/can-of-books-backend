// MongoDB Mongoose
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

// Access environment variables from process.env
const dbcon = process.env.DATABASE_URL;
const mongoose = require('mongoose');
mongoose.connect(dbcon + '/books');

exports.mongoose = mongoose;

// use the below when a module needs access to mongoose.
// const { mongoose } = require('./modules/db');