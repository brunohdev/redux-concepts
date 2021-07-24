import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
import { ActionTypes } from './types'
import { State } from '../..'

import api from '../../../services/api'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

type StockResponse = {
  id: number
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const currentQuantity: number = yield select((state: State) => {
    return state.cart.items.find(
      item => item.product.id === product.id
    )?.quantity ?? 0
  })

  const availableStockResponse: AxiosResponse<StockResponse> = yield call(api.get, `stock/${product.id}`)

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
])