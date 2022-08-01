import { createSlice } from '@reduxjs/toolkit'

import {
    hasItem, removeItem,
    addAmount,
} from '../utils/reducerFunctions'

export const deckSlice = createSlice({
    name: 'deck',
    initialState: {
        value: [],
        deckName: '',
        deckId: '',
        deckSize: 0
    },
    reducers: {
        addCards: (state, action) => {
            let {id} = action.payload
            if (hasItem(state.value, id) !== undefined) {
                addAmount(state.value, id)
            } else if (hasItem(state.value, id) === undefined) {
                state.value.push(action.payload)
            }
        },
        rermoveCards: (state, action) => {
            removeItem(state.value, action.payload)
        },
        reset: (state, action) => {
            state.value = []
            state.deckName = ''
            state.deckId = ''
        },
        selectDeck: (state, action) =>{
            const {deckName, deckList, id} = action.payload
            state.value = deckList
            state.deckName = deckName
            state.deckId = id
        },
        getAmount: (state, action) => {
            state.deckSize = action.payload
        }
    }
})

export const { addCards, rermoveCards, reset, selectDeck, getAmount } = deckSlice.actions
export default deckSlice.reducer