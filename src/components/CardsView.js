import React,{Fragment} from 'react'

import '../assets/css/main.css'
import {Card} from './Card'

export function CardsView() {
  return (
    <Fragment>
        <div className="cardsviewer">
            <Card/>
        </div>
    </Fragment>
  )
}
