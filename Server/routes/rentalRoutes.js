const express = require('express');
const router = express.Router();

const rentalController = require('../controllers/rentalController');

// Маршрут для создания новой аренды (MF1.4)
router.post('/', rentalController.createRental);

// Маршрут для получения текущих аренд (MF1.4)
router.get('/current', rentalController.getCurrentRentals);

// Маршрут для активации начала аренды путем сканирования QR-кода (MF1.11)
router.post('/activate', rentalController.activateRentalByQRCode);

module.exports = router;
