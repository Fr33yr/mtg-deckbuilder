import React,{Fragment} from 'react'
import {useSelector} from 'react-redux'

import '../assets/css/main.css'


export function Deck() {
  const deckList = useSelector((state)=>state.deck.value)
  const add = (acc, curr) => acc + curr

  return (
    <Fragment>
        <div className="deck">
            <h3>Cards: {deckList.flat().map((i)=>(i.amount)).reduce(add)}</h3>
            <ul className="decklist">
                {
                  deckList && deckList.map((item, index) => 
                  (
                  <li key={index} className="decklist-item">{item.amount} x {item.name}
                  <button className='remove-btn'>-</button></li>
                  ))
                }
            </ul>
        </div>
    </Fragment>
  )
}
