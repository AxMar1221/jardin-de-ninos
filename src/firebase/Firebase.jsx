import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDY4ThfMHP0Kn3DEDpVPRdiPmFv81Lg4OI",
  authDomain: "jardin-de-ninos-3f9d3.firebaseapp.com",
  projectId: "jardin-de-ninos-3f9d3",
  storageBucket: "jardin-de-ninos-3f9d3.appspot.com",
  messagingSenderId: "691437234568",
  appId: "1:691437234568:web:73bee65f9f5aca31ddb23d",
  measurementId: "G-HQQWWLR8DC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app );