import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAh1c-fSl-z2zOQP1E04SU4fFWAbq8bd1Q",
  authDomain: "mathocr-71689.firebaseapp.com",
  projectId: "mathocr-71689",
  storageBucket: "mathocr-71689.firebasestorage.app",
  messagingSenderId: "146155425052",
  appId: "1:146155425052:web:dba6c00ab6fb8fe1a43ed9",
  measurementId: "G-0ZHZYKF3K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
