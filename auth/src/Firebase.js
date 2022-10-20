import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZKLsRqVo1loLewQjNd4d2TsbKsJUk5wo",
  authDomain: "react-auth-6bb91.firebaseapp.com",
  projectId: "react-auth-6bb91",
  storageBucket: "react-auth-6bb91.appspot.com",
  messagingSenderId: "730963551042",
  appId: "1:730963551042:web:e8af1a8be8a4db9a929edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }