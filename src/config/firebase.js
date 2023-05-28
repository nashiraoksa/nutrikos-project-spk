// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// nutrikos-project-spk
// const firebaseConfig = {
//   apiKey: 'AIzaSyAl0RZI1GsywvNgjRK04fVqFZTRqXraS4A',
//   authDomain: 'nutrikos-project-spk.firebaseapp.com',
//   projectId: 'nutrikos-project-spk',
//   storageBucket: 'nutrikos-project-spk.appspot.com',
//   messagingSenderId: '32972795264',
//   appId: '1:32972795264:web:411931786f2cf05786e565',
// };

// nutrikos-spk
// const firebaseConfig = {
//   apiKey: 'AIzaSyDqDKrPjQRucHoj7TMRGxjvCdPMayWoHkA',
//   authDomain: 'nutrikos-spk.firebaseapp.com',
//   projectId: 'nutrikos-spk',
//   storageBucket: 'nutrikos-spk.appspot.com',
//   messagingSenderId: '687459701644',
//   appId: '1:687459701644:web:3cce05ec4a35423f113ca9',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDvB8R3mj_UTHoYgtu2JtwxtBfXEZP0OVs',
  authDomain: 'nutrikos-94fd9.firebaseapp.com',
  projectId: 'nutrikos-94fd9',
  storageBucket: 'nutrikos-94fd9.appspot.com',
  messagingSenderId: '198319598464',
  appId: '1:198319598464:web:37c68ff03da814ed88af65',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
