import { getStorage } from 'firebase/storage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1lhZE0ZKYz384oo2IM3_k4Uwd9Tx9Hts",
  authDomain: "servicemobil-3f4ca.firebaseapp.com",
  projectId: "servicemobil-3f4ca",
  storageBucket: "servicemobil-3f4ca.appspot.com",
  messagingSenderId: "686492425494",
  appId: "1:686492425494:web:718996ffb89a344438c437"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);

export const firebaseStorage = getStorage(firebaseApp)