// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdmUQYZhGNDKBfLKtA4viGhT_qUyAXm1Q",
  authDomain: "vite-contact-478cb.firebaseapp.com",
  projectId: "vite-contact-478cb",
  storageBucket: "vite-contact-478cb.firebasestorage.app",
  messagingSenderId: "525063815521",
  appId: "1:525063815521:web:c2549ce4a69c00d1efc520",
  measurementId: "G-BFXLNX8N7R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app)