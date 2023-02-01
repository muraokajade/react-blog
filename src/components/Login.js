import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const loginwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginwithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
