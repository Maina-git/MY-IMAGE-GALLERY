import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth } from '../config/Firebase'
import { provider } from '../config/Firebase'
import { FcGoogle } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import "../styles/Login.scss"


function Login({setIsAuth}){

const signIn= async ()=>{
await signInWithPopup(auth, provider);
localStorage.setItem("isAuth", true);
setIsAuth(true);
}
  return (
    <div className="login"> 
    <nav className="userInfo">
    <h1>Welcome to Franks  Gallery</h1>
    <FcGallery className="gallery"/>
</nav>
<p>Sign in With Google To Continue</p>
<button className="btn" onClick={signIn}><FcGoogle/>Sign in With Google</button>
    </div>
  )
}

export default Login
