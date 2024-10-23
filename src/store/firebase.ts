// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLsNVF77dIhP4hLSxBOMIZXbfoDTAFJ_0",
  authDomain: "artistic-855d9.firebaseapp.com",
  projectId: "artistic-855d9",
  storageBucket: "artistic-855d9.appspot.com",
  messagingSenderId: "237165913945",
  appId: "1:237165913945:web:2fb82c3e3daae90eec0e48",
  measurementId: "G-0382VLF40R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)