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
  try {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).send('Error creating book: ' + error);
  }
});

module.exports = router;