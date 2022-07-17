import React,{Fragment} from 'react'

import '../assets/css/main.css'
import Search from './Search'

export default function Header() {
  return (
    <Fragment>
        <header>
            <h2>Build your deck</h2>
            <button className='login-btn'>Login</button>
            <Search/>
        </header>
    </Fragment>
  )
}
