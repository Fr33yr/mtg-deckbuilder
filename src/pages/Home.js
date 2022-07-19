import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

export function Home() {
  return (
    <Fragment>
        <button className='newdeck-btn'>
          <Link to="/deckbuilder">New <br />Deck</Link>
        </button>
    </Fragment>
  )
}
