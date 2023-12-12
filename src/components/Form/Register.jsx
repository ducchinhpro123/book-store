import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import config from "../../config/index.js";
import axios from "axios";
import {apiBaseUrl} from "../../config/apiBaseUrl.jsx";


export default function Register() {

  const [user, setUser] = useState({username: "", password: ""});
  const [isRegistered, setIsRegistered] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')


  function handleUserChange(event) {
    const {name, value} = event.target
    setUser((prevUser) => ({...prevUser, [name]: value}))
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value)
  }

  const Button = () => (
      <div>
        <Link to={config.routes.login} className={"btn btn-success mt-1"}>Login now</Link>
      </div>
  );

  function handleSubmit(event) {
    event.preventDefault()
    if (user.username !== '' && user.password !== '' && user.password === confirmPassword) {
      // localStorage.setItem('username', user.username)
      // localStorage.setItem('password', user.password)
      axios.post(`${apiBaseUrl}/users`, user).then(response => {
        setIsRegistered(true)
      }).catch(error => {
        console.error("Error creating user: ", error)
      })
    } else if (user.password !== confirmPassword) {
      alert("Passwords do not match.")
    } else {
      alert("Please fill in both fields")
    }
  }

  return (
      <div className="container col-4">
        <form onSubmit={handleSubmit} className="mt-5 bg-white" style={{margin: '0 160px 0 160px', padding: '30px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold'}} className="mb-5">Register</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input value={user.username} type="text" name={'username'} onChange={handleUserChange}
                   className="form-control" id="username"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={user.password} type="password" name={'password'} onChange={handleUserChange}
                   className="form-control" id="password"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm your password</label>
            <input value={confirmPassword} type="password" name={'confirmPassword'}
                   onChange={handleConfirmPasswordChange}
                   className="form-control" id="confirmPassword"/>
          </div>
          <button type={'submit'} style={{color: '#091579'}} className="btn btn-primary">Register</button>
          {isRegistered && <Button/>}
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