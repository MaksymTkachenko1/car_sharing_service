//Маршрут
const express = require('express');
const reviewController = require('./reviewController');

const router = express.Router();

router.post('/cars/:carId/reviews', reviewController.createReview);
router.get('/cars/:carId/reviews', reviewController.getReviews);

module.exports = router;