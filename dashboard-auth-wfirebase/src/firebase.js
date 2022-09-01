import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorialadmin-5a942.firebaseapp.com",
  projectId: "tutorialadmin-5a942",
  storageBucket: "tutorialadmin-5a942.appspot.com",
  messagingSenderId: "634784542430",
  appId: "1:634784542430:web:22f6187ae613010ca2dc4f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
