import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext(null)

export function CartProvider ({ children }) {
  const { cart, addToCart, removeFromCart, decrementQuantity, incrementQuantity } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      decrementQuantity,
      incrementQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
