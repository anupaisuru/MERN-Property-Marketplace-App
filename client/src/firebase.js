// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-5172a.firebaseapp.com",
  projectId: "mern-estate-app-5172a",
  storageBucket: "mern-estate-app-5172a.appspot.com",
  messagingSenderId: "5453902876",
  appId: "1:5453902876:web:2b1af710393f9c100c5bd9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
