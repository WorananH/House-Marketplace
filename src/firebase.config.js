// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsbjDsA2cXiu1fU4X9OgZ5fQrQm5gvp-w',
  authDomain: 'house-marketplace-app-3cc9f.firebaseapp.com',
  projectId: 'house-marketplace-app-3cc9f',
  storageBucket: 'house-marketplace-app-3cc9f.appspot.com',
  messagingSenderId: '669923128183',
  appId: '1:669923128183:web:14ed46a64324941449e772',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
