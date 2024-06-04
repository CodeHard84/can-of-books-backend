const { mongoose } = require('../modules/db');
const Book = require('../modules/book');

async function cleanDatabase() {
  try {
    await Book.deleteMany({});
    console.log('All books have been deleted.');
  } catch (error) {
    console.error('Error deleting books:', error);
  } finally {
    mongoose.connection.close();
  }
}

cleanDatabase();
