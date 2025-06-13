const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bookController');

router.post('/', ctrl.createBook);
router.get('/', ctrl.getBooks);
router.get('/:id', ctrl.getBookById);
router.put('/:id', ctrl.updateBook);
router.patch('/:id/status', ctrl.updateBookStatus);

module.exports = router;
