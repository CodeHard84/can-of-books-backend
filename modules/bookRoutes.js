const express = require('express');
const router = express.Router();
const Book = require('./book');

router.get('/', async (req, res) => {
  // console.log(req);
  try {
    // console.log(req.user.email);
    const books = await Book.find({ user: req.user.email });
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

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send('Book not found');
    }

    if (req.user.email !== book.user) {
      return res.status(403).send('Forbidden: You are not allowed to update this book'); // This should NEVER get hit unless someone is using the API directly.
    }

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    res.json(updatedBook);
  } catch (error) {
    res.status(500).send('Error updating book: ' + error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    if (req.user.email !== book.user) {
      res.json(book);
    }
  } catch (error) {
    res.status(500).send('Error deleting book: ' + error);
  }
});

module.exports = router;
