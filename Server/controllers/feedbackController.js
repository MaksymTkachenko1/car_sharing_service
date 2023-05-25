const Feedback = require('../models/feedback');

// Создать отзыв и оценку
exports.createFeedback = async (req, res) => {
  try {
    const { userId, carId, rating, comment } = req.body;

    const feedback = await Feedback.create({
      user: userId,
      car: carId,
      rating,
      comment,
    });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create feedback' });
  }
};

// Получить отзывы и оценки для конкретного автомобиля
exports.getFeedbacksByCar = async (req, res) => {
  try {
    const { carId } = req.params;

    const feedbacks = await Feedback.find({ car: carId });

    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get feedbacks' });
  }
};
