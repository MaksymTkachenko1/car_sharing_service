const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Создать отзыв и оценку
router.post('/', feedbackController.createFeedback);

// Получить отзывы и оценки для конкретного автомобиля
router.get('/car/:carId', feedbackController.getFeedbacksByCar);

module.exports = router;
