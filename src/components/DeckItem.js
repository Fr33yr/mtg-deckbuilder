import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { deleteDeck } from '../config/firebase'
import { selectDeck } from '../store/deckSlice'
import { getColors } from '../utils/reducerFunctions'

export function DeckItem(props) {
  const { user, data, setData, id, deckName, deckList } = props
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const add = (acc, curr) => acc + curr
  
  const handleDelete = () => {

    toast((t) => (
      <span className='toast-confirmdelete'>
        Confirm delete
        <div>
          <button onClick={() => toast.dismiss(t.id)}>
            Cancel
          </button>
          <button onClick={(t) => {
            deleteDeck(user.uid, id)
            setData(data.filter(item => item.id !== id))
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
        borderRadius: "2px"
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
        <h3 className='deckitem-name'>
          {deckName}
        </h3>
        <div className='deckitem-colors'>
          <p>Colors: </p>
          {getColors(deckList).map((element, index) => (element &&
            <span key={index}
              style={{ backgroundColor: `${element.toLowerCase()}` }}
            ></span>))}
        </div>
        <p>Cards: {deckList.flat().map((i)=>(i.amount)).reduce(add)}</p>
        <div className="deckitem-btns">
          <button onClick={handleDelete}>
            Delete
          </button>
          <button onClick={handleSelect}>
            View
          </button>
        </div>
      </div>
    </Fragment>
  )
}
