// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-app-54bbd.firebaseapp.com",
  projectId: "task-manager-app-54bbd",
  storageBucket: "task-manager-app-54bbd.firebasestorage.app",
  messagingSenderId: "81752858906",
  appId: "1:81752858906:web:db30fa6f587adfb9874ca3",
  measurementId: "G-XMCP9TYK3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);