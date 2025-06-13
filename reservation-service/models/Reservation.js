const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  bookId: { type: String, required: true }, // o ID do livro vem como string (ObjectId)
  dataReserva: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['ativa', 'cancelada'],
    default: 'ativa'
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);
