// Импортируйте нужные вам функции из нужных вам SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Добавьте SDK для продуктов Firebase, которые вы хотите использовать
// https://firebase.google.com/docs/web/setup#available-libraries

// Конфигурация Firebase вашего веб-приложения
// Для Firebase JS SDK версии 7.20.0 и более поздних, measureId необязателен
const firebaseConfig = {
  apiKey: "AIzaSyCkSupfRF4H0kjSfWoupbkt4888MHwpkVc",
  authDomain: "car-sharing-service-387620.firebaseapp.com",
  projectId: "car-sharing-service-387620",
  storageBucket: "car-sharing-service-387620.appspot.com",
  messagingSenderId: "35086279280",
  appId: "1:35086279280:web:90f34874631a6ff1980ab5",
  measurementId: "G-YXGEKNTNJB"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация аутентификации Firebase и получение ссылки на сервис
const auth = getAuth(app);