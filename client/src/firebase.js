// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d6f09.firebaseapp.com",
  projectId: "mern-blog-d6f09",
  storageBucket: "mern-blog-d6f09.appspot.com",
  messagingSenderId: "1038931714070",
  appId: "1:1038931714070:web:0a3ee3510b839991ee5537",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
