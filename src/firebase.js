// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, deleteObject } from 'firebase/storage'
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAmGWIuKkDAbYrbOLGjqcj4h4yvaXv0pOQ",
  authDomain: "social-media-profile-be982.firebaseapp.com",
  projectId: "social-media-profile-be982",
  storageBucket: "social-media-profile-be982.appspot.com",
  messagingSenderId: "396068186280",
  appId: "1:396068186280:web:47bf962895aeb7c1e17a9d",
  measurementId: "G-RNGKYTRCGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app)
export const fileRef = ref(storage, 'gs://social-media-profile-be982.appspot.com/userProfileImg');
export const deleteFile = deleteObject