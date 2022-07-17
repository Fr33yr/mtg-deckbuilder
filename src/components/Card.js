import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import '../assets/css/main.css'
import { addCards } from '../store/deckSlice'


export function Card(props) {
  const { name, imageUrl, id } = props
  const dispatch = useDispatch()
  let amount = 1

  return (
    <Fragment>
      <div className="card">
        <button onClick={() => dispatch(addCards({ name, amount, imageUrl, id }))}>Add</button>
        <img src={imageUrl} alt="mtg-card" unselectable='on'
          className='card-img' />
      </div>
    </Fragment>
  )
}
