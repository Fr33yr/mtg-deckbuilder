import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../assets/css/main.css'
import { addCards } from '../store/deckSlice'


export function Card(props) {
  let { name, imageUrl, id, colors } = props
  const dispatch = useDispatch()
  const cardsAmount = useSelector((state) => state.deck.amount) //only used to set deck size limit
  let amount = 1

  const handleOnClick = () => {
    if (!colors) {
      colors = ""
    }
    dispatch(addCards({ name, amount, imageUrl, colors, id }))
  }


  return (
    <Fragment>
      <div className="card">
        <button className='card-btn' onClick={handleOnClick}
          disabled={cardsAmount >= 150? true : false}> 
          +
        </button>
        <img src={imageUrl} alt="mtg-card" unselectable='on'
          className='card-img' />
      </div>
    </Fragment>
  )
}
