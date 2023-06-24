// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC9l7CdKIsBZsWkp6Tu0BNYYKp87117f8",
  authDomain: "socialmedia-mern.firebaseapp.com",
  projectId: "socialmedia-mern",
  storageBucket: "socialmedia-mern.appspot.com",
  messagingSenderId: "915310316326",
  appId: "1:915310316326:web:83c1b415e832a139374fe7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
