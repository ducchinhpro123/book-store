import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import config from "../../config/index.js";
import {UserContext} from "../User/UserContext.jsx";
import {signup} from "../../firestore.jsx";


export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const {setCurrentUser} = useContext(UserContext)
  const [loading, setLoading] = useState(false);


  const [isRegistered, setIsRegistered] = useState(false)

  const Button = () => (
      <div>
        <Link to={config.routes.login} className={"btn btn-success mt-1"}>Login now</Link>
      </div>
  );

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true)
    await signup(email, password)
    setIsRegistered(true)
    setLoading(false)
  }

  return (
      <div className="container col-4">
        <form onSubmit={handleSignup} className="mt-5 bg-white" style={{margin: '0 160px 0 160px', padding: '30px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold'}} className="mb-5">Register</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your email</label>
            <input value={email} type="text" name={'email'}
                   onChange={(e) => setEmail(e.target.value)}
                   className="form-control" id="email"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={password} type="password" name={'password'}
                   onChange={(e) => setPassword(e.target.value)}
                   className="form-control" id="password"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm your password</label>
            <input value={confirmPassword} type="password" name={'confirmPassword'}
                   onChange={(e) => setConfirmPassword(e.target.value)}
                   className="form-control" id="confirmPassword"/>
          </div>
          <button type={'submit'} style={{color: '#091579'}}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register
          </button>
          {/*if user already have an account*/}
          <p>Already have an account? {<Link className={'text-blue-600 underline hover:text-blue-900'}
                                             to={config.routes.login}>Log in here.</Link>}</p>
          {isRegistered && <Button/>}
          {errorMessage && <p className={'text-warning'}>{errorMessage}</p>}
          {loading && <p className={'text-green-500'}>Please wait...</p>}
        </form>
      </div>
  )
}


/*
* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
*
* */