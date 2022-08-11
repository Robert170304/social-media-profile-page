// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, deleteObject } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const fileRef = ref(storage, 'gs://social-media-profile-be982.appspot.com/userProfileImg');
export const deleteFile = deleteObject