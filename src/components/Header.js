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
          {location.pathname === '/' ? <Link to="/deckbuilder" onClick={handleOnClick} className='newdeck'>
            New <br />Deck
          </Link> : ''
          }

          {user ? "" :
            <p className='login-warn'>Login to save <br />your builds</p>
          }

          {user ? <button className='login-btn'
            onClick={handleLogout}>Logout</button> :
            <Link to={"/login"} target="_blank" className='login-btn'
            >Login</Link>}
        </header>}
    </Fragment>
  )
}
