const { mongoose } = require('./db');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['available', 'checked out', 'reserved'],
  },
  user: {
    type: String,
    required: true,
    trim: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
