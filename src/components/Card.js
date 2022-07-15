import React, { Fragment } from 'react'
import { useDispatch} from 'react-redux'

import '../assets/css/main.css'
import {addCards} from '../store/deckSlice'


export function Card(props) {
  const {name, imageUrl} = props
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className="card">
        <button onClick={()=>dispatch(addCards(name))}>Add</button>
        <img src={imageUrl} alt="mtg-card" unselectable='on'
        className='card-img'/>
      </div>
    </Fragment>
  )
}
