import React, { Fragment, useState } from 'react'

import Search from '../components/Search'
import { CardsView } from '../components/CardsView'
import { DeckView } from '../components/DeckView'

export function Deckbuilder() {
    const [toggle, setToggle] = useState(false)

    return (
        <Fragment>
                <Search />
                <CardsView toggle={toggle} setToggle={setToggle}/>
                <DeckView toggle={toggle} setToggle={setToggle}/>
        </Fragment>
    )
}
