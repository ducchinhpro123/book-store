import {initializeApp} from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB86_cj7KrIuw1Hh8W6tikjxaduybH_auY",
  authDomain: "book-store-20d4d.firebaseapp.com",
  projectId: "book-store-20d4d",
  storageBucket: "book-store-20d4d.appspot.com",
  messagingSenderId: "181569103358",
  appId: "1:181569103358:web:890896048dc67c71f98caf",
  measurementId: "G-854PGMNN4Z"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)


export const db = getFirestore(app)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

provider.setCustomParameters(({prompt: 'select_account'}))