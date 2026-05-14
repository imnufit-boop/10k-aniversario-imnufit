import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbXfVqj6b_bBjX3XjJHZQ004fY2Rtm3U8",
  authDomain: "imnufit-10k.firebaseapp.com",
  projectId: "imnufit-10k",
  storageBucket: "imnufit-10k.firebasestorage.app",
  messagingSenderId: "602462357520",
  appId: "1:602462357520:web:c9492d5f3b3fa37820a295"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const CLOUDINARY_CLOUD = "dikoufbd8";
export const CLOUDINARY_PRESET = "imnufit_10k";
