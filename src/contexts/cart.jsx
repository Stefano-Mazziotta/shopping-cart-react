import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext(null)

export function CartProvider ({ children }) {
  const { cart, addToCart, removeFromCart, decrementQuantity, incrementQuantity, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      decrementQuantity,
      incrementQuantity,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
