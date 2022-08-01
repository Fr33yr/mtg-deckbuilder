import React, { Fragment, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'

import { useAuth } from '../context/AuthContext'
import { useFetch } from '../hooks/useFetch'
import { DeckItem } from '../components/DeckItem'


export function Home() {
  const { user } = useAuth()
  const [data, setData] = useFetch(user)

  return (
    <Fragment>
      <Toaster
        position='top-center' />

      <div className='home'>
        {
          user ? "" : <p className='login-warn'>Login to save <br />your builds</p>
        }

        {
          data && data.map((deck) =>
            <DeckItem {...deck} user={user} key={deck.id}
              data={data} setData={setData} />)
        }
      </div>
    </Fragment>
  )
}
