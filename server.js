'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Book = require('./modules/book');

const PORT = process.env.PORT || 3001;

app.get('/test', (req, res) => {
  res.send('test request received')
});

app.get('/books', async (req, res) => { 
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send('Error retrieving books: ' + error);
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
