import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQYymChpDOL09csC5cYgdyEyYMPPjeQM8",
  authDomain: "restaurantapp-d771a.firebaseapp.com",
  databaseURL: "https://restaurantapp-d771a-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-d771a",
  storageBucket: "restaurantapp-d771a.appspot.com",
  messagingSenderId: "1004406417934",
  appId: "1:1004406417934:web:296e8a0673d923fd5f6a5f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, storage, firestore };
