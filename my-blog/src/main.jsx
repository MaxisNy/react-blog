import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_c85WzsCnOZMRbEQYsMHrHMkz1Fzqlko",
  authDomain: "react-blog-c8c87.firebaseapp.com",
  projectId: "react-blog-c8c87",
  storageBucket: "react-blog-c8c87.firebasestorage.app",
  messagingSenderId: "394907759704",
  appId: "1:394907759704:web:d67bfe0687d6bd7a80462d",
  measurementId: "G-WN9LZPVKLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
