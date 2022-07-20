import React,{Fragment} from 'react'

import {deleteDeck} from '../config/firebase'
import {removeItem} from '../utils/reducerFunctions'

export function DeckItem(props) {
  const {deckData, user, data, setData} = props
  
  const handleDelete = () =>{
    deleteDeck(user.uid, deckData.deckName)
    setData(removeItem(data, deckData.deckName))
  }

  return (
    <Fragment>
        <div className='deckitem'>
            <p className='deckitem-name'>{deckData.deckName}</p>
            <button className='deckitem-delete__btn'
            onClick={handleDelete}>Delete</button>
        </div>
    </Fragment>
  )
}
