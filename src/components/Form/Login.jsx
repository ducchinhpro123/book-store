import {useRef, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {login} from "../../firestore.jsx";

export default function Login() {
  const email = useRef()
  const password = useRef()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await login(email.current.value, password.current.value)
      alert("Login successfully.")
      navigate('/')
    } catch (error) {
      setErrorMessage(error.message)
    }
    setIsLoading(false)
  }

  return (
      <div className="container col-4">

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="text" name={'email'} ref={email}
                 className="form-control" id="email"/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name={'password'} ref={password}
                 className="form-control" id="password"/>
        </div>
        <button onClick={handleLogin} className="btn btn-primary text-dark">Submit</button>


        {isLoading && <p className={'text-green-500'}>Please wait while we verify your credentials...</p>}
        {errorMessage && <p className={'text-red-500'}>{errorMessage}</p>}
      </div>
  )
}