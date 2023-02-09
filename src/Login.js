import React from 'react'
import './Login.css'
import { auth, provider } from "./config";
import { signInWithPopup } from 'firebase/auth';
// import { useStateValue } from './StateProvider';
// import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    signInWithPopup(auth,provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => alert(error.message))
  };
  return (
    <div className='login' >
      <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='' />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
      </div>
      <button type='submit' onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Login;
