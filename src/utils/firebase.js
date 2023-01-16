// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnmg7wUvx3ozhS_cFFoo66JzOoNeDXr-k",
  authDomain: "estacionamientohd.firebaseapp.com",
  projectId: "estacionamientohd",
  storageBucket: "estacionamientohd.appspot.com",
  messagingSenderId: "820879444973",
  appId: "1:820879444973:web:7809de9ae86745e27cf5e4",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
