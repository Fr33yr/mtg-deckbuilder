import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../assets/css/main.css'
import { rermoveCards, getAmount } from '../store/deckSlice'
import {Save} from '../components/Save'
import {useAuth} from '../context/AuthContext'

export function DeckView(props) {
  let { toggle, setToggle } = props
  const deckList = useSelector((state) => state.deck.value)
  const dispatch = useDispatch()
  const {user} = useAuth()
  const add = (acc, curr) => acc + curr

  useEffect(() => {
    deckList.length && dispatch(getAmount(deckList.flat().map((i) => (i.amount)).reduce(add)))
  }, [deckList])

  const handleDelete = (id) => {
    dispatch(rermoveCards(id))
  }

  const handleToggle = () => {
    setToggle(false)
  }

  return (
    <Fragment>
      <div className="deckview" style={toggle ? { transform: "translate(-100%, 0)" } : { transform: "translate(0, 0)" }}>
        <button className='toggle-btn__deck' onClick={handleToggle}>
          Cards
        </button>
        {user ? <Save/> : ""}
        <div className="deckstats">
          {deckList.length > 0 &&
            <h3 className="cardsamount">
              Cards: {deckList.flat().map((i) => (i.amount)).reduce(add)}
            </h3>
          }
        </div>

        {
          deckList && deckList.map((item, index) =>
          (
            <div key={index} className="decklist-item">
              <p className='decklist-item__amount'>{item.amount}x</p>
              <button className='remove-btn'
                onClick={() => handleDelete(item.id)}>
                -
              </button>
              <div className='decklist-item__image--container'>
                <img className='decklist-item__image'
                  src={item.imageUrl} alt={item.name} />
              </div>
            </div>
          ))
        }

      </div>
    </Fragment>
  )
}
