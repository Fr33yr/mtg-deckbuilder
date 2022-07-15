import {createSlice} from '@reduxjs/toolkit'

export const deckSlice = createSlice({
    name: 'deck',
    initialState: {
        value: []
    },
    reducers:{
        addCards: (state, action) => {
           state.value.push(action.payload)
        }
    }
})

export const {addCards} = deckSlice.actions
export default deckSlice.reducer