import React,{Fragment} from 'react'

import '../assets/css/main.css'

export default function Header() {
  return (
    <Fragment>
        <header>
            <h2>Build your deck</h2>
            <button className='login-btn'>Login</button>
        </header>
    </Fragment>
  )
}
