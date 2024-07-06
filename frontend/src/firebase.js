// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authapp-7fc42.firebaseapp.com",
  projectId: "authapp-7fc42",
  storageBucket: "authapp-7fc42.appspot.com",
  messagingSenderId: "553500046778",
  appId: "1:553500046778:web:d38bdaec475ebc35f81983"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);