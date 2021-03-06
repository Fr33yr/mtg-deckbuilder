import React,{Fragment} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import '../assets/css/main.css'
import {rermoveCards} from '../store/deckSlice'


export function DeckView() {
  const deckList = useSelector((state)=>state.deck.value)
  const dispatch = useDispatch()
  const add = (acc, curr) => acc + curr

  return (
    <Fragment>
        <div className="deckview">
            <div className="deckstats">
            { deckList.length > 0 && <h3 className="cardsamount">Cards: {deckList.flat().map((i)=>(i.amount)).reduce(add)}</h3>}
            </div>
            <div className="deck">
                {
                  deckList && deckList.map((item, index) => 
                  (
                  <div key={index} className="decklist-item">
                  <p className='decklist-item__amount'>{item.amount}x</p>
                  <div className='decklist-item__image--container'>
                    <img className='decklist-item__image'
                     src={item.imageUrl} alt={item.name} />
                  </div>
                  <button className='remove-btn'
                  onClick={()=>dispatch(rermoveCards(item))}>-</button></div>
                  ))
                }
            </div>
        </div>
    </Fragment>
  )
}
