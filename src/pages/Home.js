import React, { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Toaster, toast} from 'react-hot-toast'

import { useAuth } from '../context/AuthContext'
import { useFetch } from '../hooks/useFetch'
import { DeckItem } from '../components/DeckItem'
import {reset} from '../store/deckSlice'


export function Home(props) {
  const { user } = useAuth()
  const [data, setData] = useFetch(user)
  const {setSearchResults} = props
  const dispatch = useDispatch()
  let location = useLocation()
  
  useEffect(()=>{
    if(location.pathname === '/'){
      setSearchResults([])
    }
  },[location])

  const handleOnClick = () =>{
    dispatch(reset())
  }

  return (
    <Fragment>
      <Toaster
      position='top-center'/>
      <div className='home'>
        <Link to="/deckbuilder" className='newdeck'
        onClick={handleOnClick}>New <br />Deck</Link>
        {
          data && data.map((deck) => 
          <DeckItem {...deck} user={user} key={deck.id}
          data={data} setData={setData}/>)
        }
      </div>
    </Fragment>
  )
}
