const express = require('express');
const mongoose = require('mongoose');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
app.use(express.json());
app.use('/reservations', reservationRoutes);

mongoose.connect('mongodb://localhost:27017/reservationservice')
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(3002, () => console.log('reservation-service rodando na porta 3002'));
  })
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));
