// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider, signOut } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB5BujX3CZ3TMWRCW0iMJ7Ypgje4M31XWI",
  authDomain: "fir-course-8c84d.firebaseapp.com",
  projectId: "fir-course-8c84d",
  storageBucket: "fir-course-8c84d.appspot.com",
  messagingSenderId: "448438600922",
  appId: "1:448438600922:web:c30ddbe9aaef8c5dc811e3",
  measurementId: "G-Z2Y6J5W9PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export const storage = getStorage(app);