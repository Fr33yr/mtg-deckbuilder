import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import '../assets/css/main.css'
import { useAuth } from '../context/AuthContext'
import { reset } from '../store/deckSlice'


export default function Header(props) {
  const { user, logout } = useAuth()
  const [hide, setHide] = useState(false)
  let location = useLocation()
  let { setSearchResults } = props
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signin') {
      setHide(true)
    }
    if (location.pathname === '/') {
      setSearchResults([])
    }
  }, [location.pathname])

  const handleOnClick = () => {
    dispatch(reset())
  }

  return (
    <Fragment>
      {hide ? <header></header> :
        <header>
          {location.pathname === '/' ? <Link to="/deckbuilder" onClick={handleOnClick} className='newdeck'
          style={{color: "black"}}>
           <b>+</b> New deck
          </Link> : ''
          }

          {
            location.pathname === '/deckbuilder' ? <Link style={{color: "black"}} className='home-link' to='/'>Home</Link> : ""
          }

          {user ? <button className='login-btn'
            onClick={handleLogout} style={{color: "black"}}>Logout</button> :
            <Link to={"/login"} target="_blank" className='login-btn' style={{color: "black"}}
            >Login</Link>}
        </header>}
    </Fragment>
  )
}
