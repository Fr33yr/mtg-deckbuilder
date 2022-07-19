import React,{Fragment} from 'react'

export function DeckItem() {
  return (
    <Fragment>
        <div className='deckitem'>
            <p className='deckitem-name'>Deck Name</p>
            <button className='deckitem-delete__btn'>Delete</button>
        </div>
    </Fragment>
  )
}
