// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvSu5SLchYA41f3C5zda9fjvFSsAzlZdc",
  authDomain: "todo-app-8af5c.firebaseapp.com",
  projectId: "todo-app-8af5c",
  storageBucket: "todo-app-8af5c.appspot.com",
  messagingSenderId: "21749005450",
  appId: "1:21749005450:web:4d1e2fb0b1a3600ab38173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)