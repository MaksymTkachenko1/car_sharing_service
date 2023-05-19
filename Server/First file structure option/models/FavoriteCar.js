//Модель
const mongoose = require('mongoose');

const favoriteCarSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  }
});

const FavoriteCar = mongoose.model('FavoriteCar', favoriteCarSchema);

module.exports = FavoriteCar;

