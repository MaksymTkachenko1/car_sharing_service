
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