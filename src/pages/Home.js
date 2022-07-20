import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import { getDecks } from '../config/firebase'
import { DeckItem } from '../components/DeckItem'


export function Home() {
  const { user } = useAuth()
  const [decks, setDecks] = useState(null)

  useEffect(()=>{
    user && setDecks(getDecks(user.uid))
  })

  decks && console.log(decks)

  return (
    <Fragment>
      <Link to="/deckbuilder" className='newdeck'>New <br />Deck</Link>
    </Fragment>
  )
}
