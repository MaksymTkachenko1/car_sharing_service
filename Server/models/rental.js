// MF1.4

const mongoose = require('mongoose');

// Определяем схему модели аренды
const rentalSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  carId: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: 'У використанні',
  },
  paymentId: {
    type: String,
    default: null,
  },
});


// MF1.11

// Создаем модель аренды на основе схемы
const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;


