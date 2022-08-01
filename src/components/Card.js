import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../assets/css/main.css'
import { addCards, rermoveCards } from '../store/deckSlice'
import { getAmount } from '../utils/getAmount'

export function Card(props) {
  let { name, imageUrl, id, colors } = props
  const dispatch = useDispatch()
  const cardsAmount = useSelector((state) => state.deck.amount) //only used to set deck size limit
  const deckList = useSelector((state) => state.deck.value)
  let amount = 1

  const handleOnClick = () => {
    if (!colors) {
      colors = ""
    }
    dispatch(addCards({ name, amount, imageUrl, colors, id }))
  }

  const handleDelete = () => {
    dispatch(rermoveCards(id))
  }


  return (
    <Fragment>
      <div className="card">
        <div>
          <button className='card-btn__add' onClick={handleOnClick}
            disabled={cardsAmount >= 150 ? true : false}>
            +
          </button>
          <p>
            {getAmount(deckList, id)}
          </p>
          <button className='card-btn__decrement' onClick={() => handleDelete(id)}>
            -
          </button>
        </div>
        <img src={imageUrl} alt="mtg-card" unselectable='on'
          className='card-img' />
      </div>
    </Fragment>
  )
}
