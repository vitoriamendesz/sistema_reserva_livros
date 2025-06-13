const Reservation = require('../models/Reservation');
const axios = require('axios');

const BOOK_SERVICE_URL = 'http://localhost:3001/books';

exports.createReservation = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    // Consulta book-service
    const { data: livro } = await axios.get(`${BOOK_SERVICE_URL}/${bookId}`);
    if (livro.status !== 'disponível') {
      return res.status(400).json({ error: 'Livro não está disponível para reserva.' });
    }

    // Cria a reserva
    const novaReserva = await Reservation.create({ userId, bookId });

    // Atualiza o status do livro
    await axios.patch(`${BOOK_SERVICE_URL}/${bookId}/status`, { status: 'reservado' });

    res.status(201).json(novaReserva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReservationsByUser = async (req, res) => {
  try {
    const reservas = await Reservation.find({ userId: req.params.userId });
    res.json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cancelReservation = async (req, res) => {
  try {
    const reserva = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelada' },
      { new: true }
    );
    if (!reserva) return res.status(404).json({ error: 'Reserva não encontrada' });

    res.json(reserva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
