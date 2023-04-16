import { useReducer } from 'react'
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from '../reducers/cart'

export function useCartReducer () {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const decrementQuantity = product => dispatch({
    type: CART_ACTION_TYPES.DECREMENT_QUANTITY,
    payload: product
  })

  const incrementQuantity = product => dispatch({
    type: CART_ACTION_TYPES.INCREMENT_QUANTITY,
    payload: product
  })

  return { cart, addToCart, removeFromCart, decrementQuantity, incrementQuantity }
}
