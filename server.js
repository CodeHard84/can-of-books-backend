'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (req, res) => {
  res.send('test request received')
});

app.get('/books', (req, res) => { 
  res.send('books request received');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
