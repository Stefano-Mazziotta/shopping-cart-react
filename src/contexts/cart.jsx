import { useState } from 'react'
import { useContext, createContext } from 'react'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart(previousCart => {
            const clonePreviousCart = structuredClone(previousCart)

            const newCart = [
                ...clonePreviousCart,
                {
                    ...product,
                    quantity: 1
                }
            ]
            return newCart
        })
    }

    const removeFromCart = (product) => {
        setCart(previousCart => {
            const newCart = previousCart.filter(item => item.id != product.id)
            return newCart
        })
    }

    const decrementQuantity = (product) => {
    
        setCart(previousCart => {
            const clonePreviousCart = structuredClone(previousCart)
            const productInCartIndex = clonePreviousCart.findIndex(item => item.id === product.id)
            if (productInCartIndex >= 0) {
                const { quantity } = clonePreviousCart[productInCartIndex]
                if (quantity == 1) return clonePreviousCart
                
                clonePreviousCart[productInCartIndex].quantity -= 1
                return clonePreviousCart
            }

        })
    }

    const incrementQuantity = (product) => {
        setCart(previousCart => {
            const clonePreviousCart = structuredClone(previousCart)
            const productInCartIndex = clonePreviousCart.findIndex(item => item.id === product.id)
            if (productInCartIndex >= 0) {
                clonePreviousCart[productInCartIndex].quantity += 1
                return clonePreviousCart
            }
        })
    }

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