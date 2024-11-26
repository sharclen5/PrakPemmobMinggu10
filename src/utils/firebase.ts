// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSiZCdFwjsO3cbPpXzkfXOYppPNy5DBCc",
  authDomain: "vue-firebase-1474a.firebaseapp.com",
  projectId: "vue-firebase-1474a",
  storageBucket: "vue-firebase-1474a.firebasestorage.app",
  messagingSenderId: "391675144638",
  appId: "1:391675144638:web:4e471b1978446d072971ef",
  measurementId: "G-T4Q6TR91QZ"
};

const app = initializeApp(firebaseConfig);
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };

