import React,{Fragment} from 'react'

export function DeckItem(props) {
  const {deckData} = props

  return (
    <Fragment>
        <div className='deckitem'>
            <p className='deckitem-name'>{deckData.deckName}</p>
            <button className='deckitem-delete__btn'>Delete</button>
        </div>
    </Fragment>
  )
}
