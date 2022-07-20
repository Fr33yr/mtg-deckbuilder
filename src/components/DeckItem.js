import React,{Fragment} from 'react'

import {deleteDeck} from '../config/firebase'

export function DeckItem(props) {
  const {deckData, user} = props

  return (
    <Fragment>
        <div className='deckitem'>
            <p className='deckitem-name'>{deckData.deckName}</p>
            <button className='deckitem-delete__btn'
            onClick={()=>deleteDeck(user.uid, deckData.deckName)}>Delete</button>
        </div>
    </Fragment>
  )
}
