const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  status: { type: String, enum: ['disponível', 'reservado'], default: 'disponível' }
});

module.exports = mongoose.model('Book', bookSchema);
