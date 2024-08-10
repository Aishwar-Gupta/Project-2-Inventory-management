// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuwMhwAbzZ7hqZMQnT2YbaYhONS_9lx98",
  authDomain: "inventory-management-daa16.firebaseapp.com",
  projectId: "inventory-management-daa16",
  storageBucket: "inventory-management-daa16.appspot.com",
  messagingSenderId: "688941932285",
  appId: "1:688941932285:web:39e4a752aa8337ca082894",
  measurementId: "G-K6Y9FDBLD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};