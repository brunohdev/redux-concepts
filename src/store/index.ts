import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './modules/rootReducer'
import { CartState } from './modules/cart/types'

export type State = {
  cart: CartState,
}

const store = createStore(
  rootReducer,
  composeWithDevTools(),
)

export default store
