import React, { Fragment, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'

import '../assets/css/main.css'
import { useAuth } from '../context/AuthContext'


export default function Header() {
  const { loginWithGoogle, user, logout } = useAuth()
  const [hide, setHide] = useState(false)
  let location = useLocation()

  const handleLogout = async () =>{
    try{
      await logout()
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if (location.pathname === '/login' || location.pathname === '/signin'){
      setHide(true)
    }
  },[location.pathname])

  return (
    <Fragment>
      {hide? <header></header> : <header>
        {user ? "" : 
        <p className='login-warn'>Login to save <br/>your builds</p>}
        {user ? <button className='login-btn'
          onClick={handleLogout}>Logout</button> :
          <Link to={"/login"} target="_blank" className='login-btn'
          >Login</Link>}
      </header>}
    </Fragment>
  )
}
