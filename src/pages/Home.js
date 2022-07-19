import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

import {useAuth} from '../context/AuthContext'
import {getDecks} from '../config/firebase'
import {DeckItem} from '../components/DeckItem'


export function Home() {
  const {user} = useAuth()

  //user && getDecks(user.uid)

  return (
    <Fragment>
        <Link to="/deckbuilder" className='newdeck'>New <br />Deck</Link>
        <DeckItem/>
    </Fragment>
  )
}
