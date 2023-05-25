//MF1.4
const Rental = require('../models/rental');
const QRCodeService = require('../services/qrCodeService');

// Функция для создания новой аренды
async function createRental(req, res) {
  try {
    // Получаем данные о новой аренде из запроса
    const { userId, carId, startTime, endTime } = req.body;

    // Создаем новую аренду
    const rental = new Rental({
      userId,
      carId,
      startTime,
      endTime,
    });

    // Сохраняем аренду в базе данных
    await rental.save();

    res.status(201).json({ success: true, message: 'Rental created successfully', rental });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

// Функция для получения текущих аренд
async function getCurrentRentals(req, res) {
  try {
    // Получаем данные о текущих арендах из базы данных
    const rentals = await Rental.find({ status: 'У використанні' });

    res.status(200).json({ success: true, rentals });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

// Функция для активации начала аренды путем сканирования QR-кода
async function activateRentalByQRCode(req, res) {
  try {
    const { userId, carId, qrCode } = req.body;

    // Проверяем, соответствует ли сканированный QR-код автомобилю
    const isQRCodeValid = await QRCodeService.verifyQRCode(carId, qrCode);
    if (!isQRCodeValid) {
      return res.status(400).json({ success: false, message: 'Invalid QR code' });
    }

    // Активируем аренду
    const rental = await Rental.findOneAndUpdate(
      { userId, carId, status: 'У використанні' },
      { status: 'Активовано' },
      { new: true }
    );

    if (!rental) {
      return res.status(400).json({ success: false, message: 'Rental not found or already activated' });
    }

    res.status(200).json({ success: true, message: 'Rental activated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  createRental,
  getCurrentRentals,
  activateRentalByQRCode,
};
