import React, { Fragment } from 'react'

import Search from '../components/Search'
import { CardsView } from '../components/CardsView'
import { DeckView } from '../components/DeckView'

export function Deckbuilder() {
    return (
        <Fragment>
            <Search/>
            <CardsView />
            <DeckView />
        </Fragment>
    )
}
