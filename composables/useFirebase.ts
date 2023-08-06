import { getStorage } from 'firebase/storage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGjRmP9xNF--0DKLrHtFrqAuvh0roAiPI",
  authDomain: "test-servicemobil.firebaseapp.com",
  projectId: "test-servicemobil",
  storageBucket: "test-servicemobil.appspot.com",
  messagingSenderId: "248036325628",
  appId: "1:248036325628:web:f2c5653bac359f14c8ff79"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);

export const firebaseStorage = getStorage(firebaseApp)