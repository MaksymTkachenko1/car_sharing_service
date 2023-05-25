const express = require('express');
const router = express.Router();
const favoriteCarsController = require('../controllers/favoriteCarController');

// Добавить автомобиль в список любимых
router.post('/:carId', favoriteCarsController.addFavoriteCar);

// Удалить автомобиль из списка любимых
router.delete('/:carId', favoriteCarsController.removeFavoriteCar);

module.exports = router;
