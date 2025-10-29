// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEnhtMe0Su3Hwyq0f0MH-_UkW0dW5nvZs",
  authDomain: "free-shop-5a60b.firebaseapp.com",
  projectId: "free-shop-5a60b",
  storageBucket: "free-shop-5a60b.firebasestorage.app",
  messagingSenderId: "447522055859",
  appId: "1:447522055859:web:980de0359d5db17d53b2c6",
  measurementId: "G-2PGKLPZE2Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
