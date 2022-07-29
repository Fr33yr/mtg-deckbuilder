import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import '../assets/css/main.css'
import { addCards } from '../store/deckSlice'


export function Card(props) {
  let { name, imageUrl, id, colors } = props
  const dispatch = useDispatch()
  let amount = 1

  const handleOnClick = () =>{
    if(!colors){
      colors = ""
    }
    dispatch(addCards({ name, amount, imageUrl, colors, id }))
  }

  return (
    <Fragment>
      <div className="card">
        <button className='card-btn' onClick={handleOnClick}>+</button>
        <img src={imageUrl} alt="mtg-card" unselectable='on'
          className='card-img' />
      </div>
    </Fragment>
  )
}
