import React,{Fragment} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import '../assets/css/main.css'
import {rermoveCards} from '../store/deckSlice'


export function Deck() {
  const deckList = useSelector((state)=>state.deck.value)
  const dispatch = useDispatch()
  const add = (acc, curr) => acc + curr
  console.log(deckList)

  return (
    <Fragment>
        <div className="deck">
            { deckList.length > 0 && <h3>Cards: {deckList.flat().map((i)=>(i.amount)).reduce(add)}</h3>}
            <ul className="decklist">
                {
                  deckList && deckList.map((item, index) => 
                  (
                  <li key={index} className="decklist-item">{item.amount} x {item.name}
                  <button className='remove-btn'
                  onClick={()=>dispatch(rermoveCards(item))}>-</button></li>
                  ))
                }
            </ul>
        </div>
    </Fragment>
  )
}
