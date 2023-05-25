const FavoriteCars = require('../models/FavoriteCar');

// Добавить автомобиль в список любимых
exports.addFavoriteCar = async (req, res) => {
  try {
    const { carId } = req.params;
    const { userId } = req.body;

    const favoriteCars = await FavoriteCars.findOneAndUpdate(
      { user: userId },
      { $addToSet: { cars: carId } },
      { upsert: true, new: true }
    );

    res.status(200).json(favoriteCars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add car to favorite list' });
  }
};

// Удалить автомобиль из списка любимых
exports.removeFavoriteCar = async (req, res) => {
  try {
    const { carId } = req.params;
    const { userId } = req.body;

    const favoriteCars = await FavoriteCars.findOneAndUpdate(
      { user: userId },
      { $pull: { cars: carId } },
      { new: true }
    );

    res.status(200).json(favoriteCars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove car from favorite list' });
  }
};
