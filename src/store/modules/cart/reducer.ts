import { Reducer } from "redux"
import produce from 'immer'
import { CartState } from "./types"

const INITIAL_STATE: CartState = {
  items: []
}

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  // Immer: Alternative library to
  // make immutability less verbose
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }

        break

        // Default immutable solution
        // return {
        //   ...state,
        //   items: [
        //     ...state.items,
        //     {
        //       product,
        //       quantity: 1,
        //     }
        //   ]
        // }
      }
      default: {
        return draft
      }
    }
  })
}

export default cart
