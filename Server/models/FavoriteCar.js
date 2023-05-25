const mongoose = require('mongoose');

const favoriteCarsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
  }],
});

const FavoriteCars = mongoose.model('FavoriteCars', favoriteCarsSchema);

module.exports = FavoriteCars;
