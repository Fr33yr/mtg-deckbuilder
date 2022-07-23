import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

import '../assets/css/main.css'
import { useAuth } from '../context/AuthContext'


export default function Header() {
  const { loginWithGoogle, user, logout } = useAuth()

  const handleLogout = async () =>{
    try{
      await logout()
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Fragment>
      <header>
        {user ? <h3 className='header-user'>User: </h3> : 
        <p className='login-warn'>Login to save <br/>your builds</p>}
        {user ? <button className='login-btn'
          onClick={handleLogout}>Logout</button> :
          <Link to={"/login"} target="_blank" className='login-btn'
          >Login</Link>}
      </header>
    </Fragment>
  )
}
