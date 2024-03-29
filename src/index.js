import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import   "./components/NavBar/navBar.css"

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMnEF0JKtnT_xIBF7rbzjyw77D0eusMzc",
  authDomain: "coderhosue.firebaseapp.com",
  projectId: "coderhosue",
  storageBucket: "coderhosue.appspot.com",
  messagingSenderId: "531471906395",
  appId: "1:531471906395:web:6aa62a84ae12db138af17e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
