
class Rental {
  constructor(user, item, duration) {
    this.user = user;
    this.item = item;
    this.duration = duration;
    this.startTime = new Date();
    this.endTime = new Date(this.startTime.getTime() + duration * 60 * 60 * 1000);
    this.contractGenerated = false;
    this.contractSent = false;
    this.paymentReceived = false;
    this.remainingTimeNotified = false;
  }

  generateRentalContract() {
    // Логика для генерации онлайн-договора об аренде в формате PDF (MF1.4)
    // Генерируйте договор об аренде с использованием данных пользователя и арендуемого объекта
    // Сохраните договор в сервисе в формате PDF
    // Установите флаг this.contractGenerated в true после успешной генерации
    if (!this.contractGenerated) {
      // Генерация и сохранение договора об аренде в формате PDF
      console.log('Сгенерирован договор об аренде в формате PDF.');
      this.contractGenerated = true;
    } else {
      console.log('Договор об аренде уже был сгенерирован.');
    }
  }

  sendRentalContract() {
    // Логика для отправки договора об аренде на почту пользователя (MF1.5)
    // Отправьте сгенерированный договор об аренде на адрес пользователя
    // Установите флаг this.contractSent в true после успешной отправки
    if (!this.contractSent) {
      // Отправить договор об аренде на адрес пользователя
      console.log(`Отправлен договор об аренде в формате PDF на адрес ${this.user.email}`);
      this.contractSent = true;
    } else {
      console.log('Договор об аренде уже был отправлен.');
    }
  }

  initiatePayment() {
    // Логика для инициации платежа (MF1.8)
    // Используйте платежные API (например, Google Pay или PayPal) для инициации платежа
    // Пометьте, что платеж инициирован, установив флаг this.paymentReceived в true
    if (!this.paymentReceived) {
      // Инициировать платеж с использованием платежного API
      console.log('Платеж за аренду инициирован.');
      this.paymentReceived = true;
    } else {
      console.log('Платеж за аренду уже был инициирован.');
    }
  }

  getRemainingTime() {
    // Логика для определения оставшегося времени аренды (MF1.10)
    const currentTime = new Date();
    const remainingTime = Math.max(0, this.endTime - currentTime);
    return remainingTime;
  }

  notifyRemainingTime() {
    // Логика для отправки уведомлений на мобильное устройство пользователя об оставшемся времени аренды (MF1.12)
    // Используйте мобильное уведомление API для отправки уведомлений с информацией об оставшемся времени аренды
    // Отправьте уведомления оставшегося времени аренды на указанные временные интервалы
    // Установите флаг this.remainingTimeNotified в true после успешной отправки уведомлений
    if (!this.remainingTimeNotified) {
      const remainingTime = this.getRemainingTime();

      // Отправить уведомления оставшегося времени аренды
      if (remainingTime >= 60 * 60 * 1000) {
        console.log('Уведомление: Остался 1 час до окончания аренды.');
      }
      if (remainingTime >= 30 * 60 * 1000) {
        console.log('Уведомление: Осталось 30 минут до окончания аренды.');
      }
      if (remainingTime >= 15 * 60 * 1000) {
        console.log('Уведомление: Осталось 15 минут до окончания аренды.');
      }
      if (remainingTime >= 5 * 60 * 1000) {
        console.log('Уведомление: Осталось 5 минут до окончания аренды.');
      }

      this.remainingTimeNotified = true;
    } else {
      console.log('Уведомления об оставшемся времени аренды уже были отправлены.');
    }
  }
}