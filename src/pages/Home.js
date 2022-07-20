import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import {useFetch} from '../hooks/useFetch'
import { DeckItem } from '../components/DeckItem'


export function Home() {
  const { user } = useAuth()
  const [data] = useFetch(user)

  return (
    <Fragment>
      <Link to="/deckbuilder" className='newdeck'>New <br />Deck</Link>
      {
        data && data.map((deck)=><DeckItem {...deck} key={deck.id}/>)
      }
    </Fragment>
  )
}
