import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { deleteDeck } from '../config/firebase'
import { selectDeck } from '../store/deckSlice'

export function DeckItem(props) {
  const { user, data, setData, id, deckName, deckList } = props
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleDelete = () => {
    
    toast((t) => (
      <span className='toast-confirmdelete'>
        Confirm delete
        <div>
          <button onClick={() => toast.dismiss(t.id)}>
            Cancel
          </button>
          <button onClick={(t)=>{
            deleteDeck(user.uid, id)
            setData(data.filter(item=>item.id !== id))
            toast.dismiss(t.id)
          }}>
            Delete
          </button>
        </div>
      </span>
    ), {
      style: {
        backgroundColor: "#333", 
        color: "#fff",
        borderRadius: "5px"
      }
    })
  }

  const handleSelect = () => {
    dispatch(selectDeck({ deckName, deckList, id }))
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
