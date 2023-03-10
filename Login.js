import React from 'react'
import './Login.css'
import { auth, provider } from "./config";
import { signInWithPopup } from 'firebase/auth';
// import { useStateValue } from './StateProvider';
// import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //sign in
    
      signInWithPopup(auth,provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
