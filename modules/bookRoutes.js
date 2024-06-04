const express = require('express');
const router = express.Router();
const Book = require('./book');


router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send('Error retrieving books: ' + error);
  }
});

router.post('/', async (req, res) => {
  res.send('post request received');
});

module.exports = router;