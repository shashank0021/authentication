// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvfhx2YSZR1dRoN-YpTfo7nHAbDXz0kjs",
  authDomain: "auths-a6ae7.firebaseapp.com",
  projectId: "auths-a6ae7",
  storageBucket: "auths-a6ae7.appspot.com",
  messagingSenderId: "1040588093133",
  appId: "1:1040588093133:web:091f29ff5d4cdd496adb84",
  measurementId: "G-8B4HJERXFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app)