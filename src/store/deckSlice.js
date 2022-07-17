import { createSlice } from '@reduxjs/toolkit'

import { hasItem, itemStacker } from '../utils/Stacks'

export const deckSlice = createSlice({
    name: 'deck',
    initialState: {
        value: []
    },
    reducers: {
        addCards: (state, action) => {
            if (hasItem(state.value, action.payload.id) !== undefined) {
                itemStacker(state.value, action.payload.id)
            } else if (hasItem(state.value, action.payload.id) === undefined) {
                state.value.push(action.payload)
            }
        }
    }
})

export const { addCards } = deckSlice.actions
export default deckSlice.reducer