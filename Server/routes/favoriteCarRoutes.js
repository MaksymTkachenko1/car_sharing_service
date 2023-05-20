//Маршрут
const express = require('express');
const favoriteCarController = require('./favoriteCarController');

const router = express.Router();

router.post('/users/:userId/favorite-cars/:carId', favoriteCarController.addFavoriteCar);
router.get('/users/:userId/favorite-cars', favoriteCarController.getFavoriteCars);
router.delete('/users/:userId/favorite-cars/:carId', favoriteCarController.removeFavoriteCar);

module.exports = router;
