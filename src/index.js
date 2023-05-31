// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
import { connect } from "mongoose";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkSupfRF4H0kjSfWoupbkt4888MHwpkVc",
  authDomain: "car-sharing-service-387620.firebaseapp.com",
  projectId: "car-sharing-service-387620",
  storageBucket: "car-sharing-service-387620.appspot.com",
  messagingSenderId: "35086279280",
  appId: "1:35086279280:web:931193e35849853f980ab5",
  measurementId: "G-6HKH8PVZKK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = connection(db, "todos");
const snapshot = await getDocs(todosCol);

// Обнаружение пользователя
onAuthStateChanged(function (user) {
  if (user !== null) {
    console.log("Пользователь зарегистрирован");
  } else {
    console.log("Пользователь не зарегистрирован");
  }
});
// https://www.youtube.com/watch?v=rQvOAnNvcNQ&t=105s