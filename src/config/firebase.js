// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAl0RZI1GsywvNgjRK04fVqFZTRqXraS4A',
  authDomain: 'nutrikos-project-spk.firebaseapp.com',
  projectId: 'nutrikos-project-spk',
  storageBucket: 'nutrikos-project-spk.appspot.com',
  messagingSenderId: '32972795264',
  appId: '1:32972795264:web:411931786f2cf05786e565',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
