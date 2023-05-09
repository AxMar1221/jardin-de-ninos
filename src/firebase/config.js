// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIAJ3QFMSdA8JbwZPG7VU0KBCwo-RxtOY",
  authDomain: "jardin-de-ninos-agustin-yanes.firebaseapp.com",
  projectId: "jardin-de-ninos-agustin-yanes",
  storageBucket: "jardin-de-ninos-agustin-yanes.appspot.com",
  messagingSenderId: "151021870483",
  appId: "1:151021870483:web:26028364a0294abcd79c66",
  measurementId: "G-CNFDZ858B6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );