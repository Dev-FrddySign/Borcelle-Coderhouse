// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnVi1pVanCa7fyz7pYz_2szcb4GXNZInc",
  authDomain: "borcelle-29aaf.firebaseapp.com",
  projectId: "borcelle-29aaf",
  storageBucket: "borcelle-29aaf.appspot.com",
  messagingSenderId: "734134908812",
  appId: "1:734134908812:web:0db1ccaa17c5e7e02608a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)