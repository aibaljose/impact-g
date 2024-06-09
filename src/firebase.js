
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAl7jTv-V5LfLvrQAFMQOvuX5cWPIh13N0",
  authDomain: "impactchallenge-314e7.firebaseapp.com",
  projectId: "impactchallenge-314e7",
  storageBucket: "impactchallenge-314e7.appspot.com",
  messagingSenderId: "11712725863",
  appId: "1:11712725863:web:98d392f5470dfa8f75e5c2",
    databaseURL: "https://impactchallenge-314e7-default-rtdb.asia-southeast1.firebasedatabase.app"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
