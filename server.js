'use strict';

require('dotenv').config();

// Express server
const express = require('express');
const app = express();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Mongoose
const { mongoose } = require('./modules/db');

const PORT = process.env.PORT || 3001;

app.get('/test', (req, res) => {
  res.send('test request received')
});

app.get('/books', (req, res) => { 
  res.send('books request received');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
