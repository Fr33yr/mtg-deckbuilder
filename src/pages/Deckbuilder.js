import React, { Fragment } from 'react'

import Search from '../components/Search'
import { CardsView } from '../components/CardsView'
import { Deck } from '../components/Deck'

export function Deckbuilder() {
    return (
        <Fragment>
            <Search/>
            <CardsView />
            <Deck />
        </Fragment>
    )
}
