import { createSlice } from '@reduxjs/toolkit'

import {
    hasItem, removeItem,
    addAmount,
    decreaseAmount
} from '../utils/reducerFunctions'

export const deckSlice = createSlice({
    name: 'deck',
    initialState: {
        value: [],
        deckName: ''
    },
    reducers: {
        addCards: (state, action) => {
            if (hasItem(state.value, action.payload.id) !== undefined) {
                addAmount(state.value, action.payload.id)
            } else if (hasItem(state.value, action.payload.id) === undefined) {
                state.value.push(action.payload)
            }
        },
        rermoveCards: (state, action) => {
            if (action.payload.amount < 2) {
                removeItem(state.value, action.payload.id)
            }
            decreaseAmount(state.value, action.payload.id)
        },
        reset: (state, action) => {
            state.value = []
            state.deckName = ''
        },
        selectDeck: (state, action) =>{
            const {deckName, deckList} = action.payload
            state.value = deckList
            state.deckName = deckName
        }
    }
})

export const { addCards, rermoveCards, reset, selectDeck } = deckSlice.actions
export default deckSlice.reducer