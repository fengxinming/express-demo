import {
    combineReducers
} from 'redux'
import {
    ADD_TO_CART
} from './actionTypes'

const cartIds = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.id) === -1) {
                return [...state, action.id]
            } else {
                return state
            }
        default:
            return state
    }
}

const cartQuantities = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const quantity = state[action.id] || 0
            return Object.assign({...state
            }, {
                [action.id]: quantity + 1
            })
        default:
            return state
    }
}

export default combineReducers({
    ids: cartIds,
    quantities: cartQuantities
})