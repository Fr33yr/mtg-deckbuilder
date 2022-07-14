export function reducerCards(state, action) {
    switch(action.type){
        case 'getCards':
            return{...state, cardsData: action.payload}
        default:
            return state
    }
}