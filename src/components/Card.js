import React, { Fragment } from 'react'

import '../assets/css/main.css'

export function Card(props) {
  const {name, imageUrl} = props

  return (
    <Fragment>
      <div className="card">
        <button onClick={()=>console.log(name)}>Add</button>
        <img src={imageUrl} alt="mtg-card" unselectable='on'
        className='card-img'/>
      </div>
    </Fragment>
  )
}
