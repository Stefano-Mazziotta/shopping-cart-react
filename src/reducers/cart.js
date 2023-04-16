export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
  INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
const updateLocalStorage = cart => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (cart, action) => {
    const clonedCart = structuredClone(cart)
    const newCart = [
      ...clonedCart,
      {
        ...action.payload,
        quantity: 1
      }
    ]
    updateLocalStorage(newCart)

    return newCart
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (cart, action) => {
    const { id } = action.payload
    const newCart = cart.filter(item => item.id !== id)
    updateLocalStorage(newCart)

    return newCart
  },
  [CART_ACTION_TYPES.DECREMENT_QUANTITY]: (cart, action) => {
    const { id } = action.payload
    const productInCartIndex = cart.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      const { quantity } = newCart[productInCartIndex]

      if (quantity === 1) return newCart

      newCart[productInCartIndex].quantity -= 1
      updateLocalStorage(newCart)

      return newCart
    }
  },
  [CART_ACTION_TYPES.INCREMENT_QUANTITY]: (cart, action) => {
    const { id } = action.payload
    const productInCartIndex = cart.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      updateLocalStorage(newCart)

      return newCart
    }
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export function cartReducer (cart, action) {
  const { type: actionType } = action
  const updateCart = UPDATE_STATE_BY_ACTION[actionType]
  return updateCart ? updateCart(cart, action) : cart
}
