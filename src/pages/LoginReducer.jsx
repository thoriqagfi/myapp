import { useEffect } from 'react';
import {useRef, useReducer} from 'react';
import { LoginToServer } from '../services/Auth';

const InitialState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  user: {},
}

// tipe action for reducer
const LoginAction = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_OUT: 'SIGN_OUT',
}

const LoginReducer = (state, action) => {
  console.log('LoginReducer', action.type);
  switch(action.type) {
    case LoginAction.SET_LOADING:
      return { ...state, isLoading: true };
    case LoginAction.SIGN_IN_SUCCESS:
      return { 
        ...state, 
        isLoggedIn: true,
        isLoading: false,
        isError: false,
        user: action.payload.user 
      };
    case LoginAction.SIGN_IN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        isError: action.payload.error,
      }
    case LoginAction.SIGN_OUT:
      return InitialState;
    default:
      break;
  }
}


export default function Login() {
  const [state, dispatch] = useReducer(LoginReducer, InitialState);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [user, setUser] = useState({});
  useEffect(() => {
    console.log(state);
  }, [state])

  const emailRef = useRef();
  const passwordRef = useRef();

  const  SignIn = async (event) => {
    event.preventDefault();
    dispatch({type: LoginAction.SET_LOADING});
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const user = await LoginToServer(email, password);
      dispatch({
        type: LoginAction.SIGN_IN_SUCCESS, 
        payload: {user} 
      });
    } catch (error) {
      dispatch({
        type: LoginAction.SIGN_IN_FAILED, 
        payload: {error: error.message}
      });
    }
  }

  const SignOut = () => {
    dispatch({type: LoginAction.SIGN_OUT});
  }

  return (
    <>
      <div className='flex justify-center gap-x-16 py-10 bg-cyan-900'>
        <div className='text-white bg-cyan-700 p-5 rounded-xl'>
          <p>Is Loading : {String(state.isLoading)}</p>
          <p>Is Logged In : {String(state.isLoggedIn)}</p>
          <p>Is Error : {String(state.isError)}</p>
          <h1>USER</h1>
          <p>ID: {state.user.id}</p>
          <p>Email: {state.user.email}</p>
          <p>Full Name: {state.user.fullName}</p>
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