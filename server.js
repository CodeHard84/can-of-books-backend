'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bookRoutes = require('./modules/bookRoutes');

const PORT = process.env.PORT || 3001;

app.use('/books', bookRoutes);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
