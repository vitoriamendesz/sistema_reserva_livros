const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

mongoose.connect('mongodb://localhost:27017/bookservice')
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(3001, () => console.log('book-service rodando na porta 3001'));
  })
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));
