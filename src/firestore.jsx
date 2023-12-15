// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut, updateProfile
} from "firebase/auth";
import {useEffect, useState} from "react";
import {getDownloadURL, getStorage, ref, uploadBytes} from "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86_cj7KrIuw1Hh8W6tikjxaduybH_auY",
  authDomain: "book-store-20d4d.firebaseapp.com",
  projectId: "book-store-20d4d",
  storageBucket: "book-store-20d4d.appspot.com",
  messagingSenderId: "181569103358",
  appId: "1:181569103358:web:890896048dc67c71f98caf",
  measurementId: "G-854PGMNN4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

const storage = getStorage()

export function logout() {
  return signOut(auth)
}

export const googleProvider = new GoogleAuthProvider()

export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, user => setCurrentUser(user));
  }, [])

  return currentUser;
}

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png')
  setLoading(true)
  const snapshot = await uploadBytes(fileRef, file)

  const photoURL = await getDownloadURL(fileRef)

  await updateProfile(currentUser, {photoURL})
  setLoading(false)
  alert("Uploaded file!")
}

export default app;