const Rental = require('./Rental'); // Предполагается, что у вас есть отдельный файл Rental.js с реализацией модели Rental

class RentalController {
  constructor() {
    this.rentals = [];
  }

  createRental(user, item, duration) {
    const rental = new Rental(user, item, duration);
    this.rentals.push(rental);
    return rental;
  }

  concludeRental(rental) {
    rental.generateRentalContract(); // Создание онлайн-договора об аренде (MF1.4)
    rental.sendRentalContract(); // Отправка договора об аренде на почту пользователя (MF1.5)
  }

  initiatePayment(rental) {
    rental.initiatePayment(); // Инициирование платежа (MF1.8)
  }

  startRental(rental) {
    rental.notifyRemainingTime(); // Отправка уведомлений оставшегося времени аренды (MF1.12)
  }
}

// Пример использования контроллера RentalController.js
const rentalController = new RentalController();

const user = {
  email: 'example@gmail.com',
  phoneNumber: '1234567890'
};

const rentalItem = {
  name: 'Car',
  price: 50
};

const rentalDuration = 2; // В часах

const rental = rentalController.createRental(user, rentalItem, rentalDuration);
rentalController.concludeRental(rental);
rentalController.initiatePayment(rental);
rentalController.startRental(rental);
