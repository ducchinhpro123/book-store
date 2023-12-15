import {useState} from "react";
import {auth} from "../firestore.jsx";
import {createUserWithEmailAndPassword} from 'firebase/auth'


function TestFirebase() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userRegistered = userCredential.user
          setUser(userRegistered)
          // console.log(userRegistered)
        })
        .catch((error) => {
          console.error(error)
        })
  }

  return (
      <div className={'w-full bg-white flex justify-content-center'}>
        <form className=" shadow-md w-50 rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-address">
              Email address
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={onSubmit}
            >
              Sign up
            </button>
          </div>
        </form>

      </div>
  );
}

export default TestFirebase;