import {useRef, useState} from 'react';
import { LoginToServer } from '../services/Auth';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();

  const  SignIn = async (event) => {
    event.preventDefault()
    setIsLoading(true);
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const user = await LoginToServer(email, password);
      setUser(user);
      setIsLoggedIn(true);
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  }

  const SignOut = () => {
    setIsLoggedIn(false);
    setIsError(false);
    setIsLoading(false);
    setUser({});
  }

  return (
    <>
      <div className='flex justify-center gap-x-16 py-10 bg-cyan-900'>
        <div className='text-white bg-cyan-700 p-5 rounded-xl'>
          <p>Is Loading : {String(isLoading)}</p>
          <p>Is Logged In : {String(isLoggedIn)}</p>
          <p>Is Error : {String(isError)}</p>
          <h1>USER</h1>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Full Name: {user.fullName}</p>
        </div>

        <div className='grid items-center text-white bg-cyan-700 p-5 rounded-xl'>
          <form action="" onSubmit={SignIn}>
            <input ref={emailRef} type="email" name='email' id='email' placeholder='Email' className='border-2 border-cyan-300 rounded-lg px-3 text-black my-1'/>
            <br />
            <input ref={passwordRef} type="password" name='password' id='password' placeholder='Password' className='border-2 border-cyan-300 rounded-lg px-3 text-black my-1'/>
            <br />
            <button className='bg-black py-1 mt-2 px-2 rounded-lg hover:text-cyan-700'>
              SIGN IN
            </button>
          </form>

          <button  onClick={SignOut}>SIGN OUT</button>
        </div>
      </div>
    </>
  )
}