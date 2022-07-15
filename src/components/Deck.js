import React,{Fragment} from 'react'
import {useSelector} from 'react-redux'

import '../assets/css/main.css'


export function Deck() {
  const deckList = useSelector((state)=>state.deck.value)
  console.log(deckList)
  return (
    <Fragment>
        <div className="deck">
            <ul className="decklist">
                {
                  deckList && deckList.map((item, index) => 
                  (<li key={index} className="decklist-item">{item}</li>))
                }
            </ul>
        </div>
    </Fragment>
  )
}
