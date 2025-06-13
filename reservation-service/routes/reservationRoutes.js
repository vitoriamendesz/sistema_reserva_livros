const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/reservationController');

router.post('/', ctrl.createReservation);
router.get('/user/:userId', ctrl.getReservationsByUser);
router.delete('/:id', ctrl.cancelReservation);

module.exports = router;
