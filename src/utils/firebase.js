// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBL2lXpAtSTxJSp_L-KnlPNd273Unms3qE',
  authDomain: 'netflixgpt-2b6da.firebaseapp.com',
  projectId: 'netflixgpt-2b6da',
  storageBucket: 'netflixgpt-2b6da.firebasestorage.app',
  messagingSenderId: '653141499254',
  appId: '1:653141499254:web:267b377d941a0ec3392e57',
  measurementId: 'G-K8SYSSF0L6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
