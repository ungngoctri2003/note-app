// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIm16RYbwGIzIRT6UWW14mBTdj3zvNgns",
  authDomain: "note-app-2a346.firebaseapp.com",
  projectId: "note-app-2a346",
  storageBucket: "note-app-2a346.firebasestorage.app",
  messagingSenderId: "320410139108",
  appId: "1:320410139108:web:4e47abe6a1b36dbe84aff1",
  measurementId: "G-K4WQM2QM80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
