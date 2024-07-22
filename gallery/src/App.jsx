import React from 'react'
import Login from './pages/Login'
import { useState } from 'react'
import Home from './pages/Home'

function App() {

  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth", true));

if(!isAuth){
  return (
    <div>
    <Login setIsAuth={setIsAuth}/>
    </div>
  )
}
  
return (
  <div>
    <Home setIsAuth={setIsAuth}/>
  </div>
)
}

export default App
