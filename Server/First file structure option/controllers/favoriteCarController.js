//Контр
const FavoriteCar = require('./FavoriteCar');

// Добавление автомобиля в список избранных автомобилей пользователя
exports.addFavoriteCar = async (req, res) => {
  const { carId } = req.params;
  const { userId } = req.body;

  try {
    const favoriteCar = new FavoriteCar({
      user: userId,
      car: carId
    });

    await favoriteCar.save();
    res.status(201).json({ message: 'Car added to favorites successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the car to favorites.' });
  }
};

// Получение списка избранных автомобилей пользователя
exports.getFavoriteCars = async (req, res) => {
  const { userId } = req.params;

  try {
    const favoriteCars = await FavoriteCar.find({ user: userId }).populate('car');
    res.status(200).json(favoriteCars);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving favorite cars.' });
  }
};

// Удаление автомобиля из списка избранных автомобилей пользователя
exports.removeFavoriteCar = async (req, res) => {
  const { carId } = req.params;
  const { userId } = req.body;

  try {
    await FavoriteCar.findOneAndRemove({ user: userId, car: carId });
    res.status(200).json({ message: 'Car removed from favorites successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while removing the car from favorites.' });
  }
};
