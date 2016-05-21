import { combineReducers } from 'redux'
import productsReducer from './products'
import cartReducer from './cart'

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

export default reducers
