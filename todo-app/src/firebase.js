// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiATc1DcfbKdZwAihAn1K9_05kDdF5aBg",
  authDomain: "todo-af968.firebaseapp.com",
  projectId: "todo-af968",
  storageBucket: "todo-af968.appspot.com",
  messagingSenderId: "1095362882838",
  appId: "1:1095362882838:web:d75ff0635da05d97c67437",
  measurementId: "G-926GK82W7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);