import React,{Fragment} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {deleteDeck} from '../config/firebase'
import {selectDeck} from '../store/deckSlice'

export function DeckItem(props) {
  const { user, data, setData, id, deckName, deckList} = props
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleDelete = () =>{
    deleteDeck(user.uid, id)
    setData(data.filter(item=>item.id !== id))
  }

  const handleSelect = () =>{
    dispatch(selectDeck({deckName, deckList}))
    navigate("/deckbuilder")
  }

  return (
    <Fragment>
        <div className='deckitem'>
            <p onClick={handleSelect}
             className='deckitem-name'>{deckName}</p>
            <button className='deckitem-delete__btn'
            onClick={handleDelete}>Delete</button>
        </div>
    </Fragment>
  )
}
