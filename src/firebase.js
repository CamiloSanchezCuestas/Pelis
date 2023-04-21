// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsIc-v4jy6sqC2d7BOjLidaHC6vUvuVPk",
  authDomain: "cuevanapremium-2b9bc.firebaseapp.com",
  projectId: "cuevanapremium-2b9bc",
  storageBucket: "cuevanapremium-2b9bc.appspot.com",
  messagingSenderId: "242744818011",
  appId: "1:242744818011:web:40c490d76f612f09e9027e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);