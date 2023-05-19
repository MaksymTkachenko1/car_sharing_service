//Контр
const Review = require('./Review');

// Создание отзыва о автомобиле
exports.createReview = async (req, res) => {
  const { carId } = req.params;
  const { userId, rating, comment } = req.body;

  try {
    const review = new Review({
      user: userId,
      car: carId,
      rating,
      comment
    });

    await review.save();
    res.status(201).json({ message: 'Review created successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the review.' });
  }
};

// Получение отзывов об автомобиле
exports.getReviews = async (req, res) => {
  const { carId } = req.params;

  try {
    const reviews = await Review.find({ car: carId }).populate('user');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the reviews.' });
  }
};
