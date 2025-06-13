const Book = require('../models/Book');

// POST /books
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/:id
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /books/:id
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PATCH /books/:id/status
exports.updateBookStatus = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
