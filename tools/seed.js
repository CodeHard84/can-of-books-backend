const { mongoose } = require('../modules/db');
const Book = require('../modules/book');

const books = [
    {
        title: 'Star Wars: Thrawn',
        description: 'The story of the rise of Grand Admiral Thrawn within the Empire and his brilliant tactical mind.',
        status: 'available',
    },
    {
        title: 'Star Wars: Dark Disciple',
        description: 'The story of Jedi Knight Quinlan Vos and Asajj Ventress teaming up to take down Count Dooku.',
        status: 'available',
    },
    {
        title: 'Star Wars: Bloodline',
        description: 'The story of Leia Organa’s political battles and the rise of the First Order.',
        status: 'available',
    },
    {
        title: 'Star Wars: Ahsoka',
        description: 'The story of Ahsoka Tano after she leaves the Jedi Order and her journey in the galaxy.',
        status: 'available',
    }
];

async function seedDatabase() {
    try {
        await Book.create(books);
        console.log('Data inserted');
    } catch (error) {
        console.error('Error inserting data: ', error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
