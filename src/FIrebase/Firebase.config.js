// Do no share
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRKG6tKnSM4_boIsLRXcmUVkKTsdBAPtE",
  authDomain: "sturdy-mate.firebaseapp.com",
  projectId: "sturdy-mate",
  storageBucket: "sturdy-mate.firebasestorage.app",
  messagingSenderId: "576798973888",
  appId: "1:576798973888:web:c8453321c7e138b2583225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
