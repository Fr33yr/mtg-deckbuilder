import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import { useFetch } from '../hooks/useFetch'
import { DeckItem } from '../components/DeckItem'


export function Home(props) {
  const { user } = useAuth()
  const [data, setData] = useFetch(user)
  const {setValue} = props

  return (
    <Fragment>
      <div className='home'>
        <Link to="/deckbuilder" className='newdeck'
        onClick={()=>setValue([])}>New <br />Deck</Link>
        {
          data && data.map((deck) => 
          <DeckItem {...deck} user={user} key={deck.id}
          data={data} setData={setData}/>)
        }
      </div>
    </Fragment>
  )
}
