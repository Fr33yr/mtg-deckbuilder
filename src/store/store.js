import {configureStore} from '@reduxjs/toolkit'

import deckReducer from '../store/deckSlice'

export default configureStore({
    reducer:{
        deck: deckReducer,
    },
})