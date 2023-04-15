import './style.css'
import { useId } from 'react'

import { CartIcon } from '../icons'
import { CartItem } from './CartItem'
import { useCart } from '../../hooks/useCart'

export function Cart() {
  const { cart, decrementQuantity, incrementQuantity } = useCart()

  const cartCheckboxId = useId()
  const existProductsInCart = cart.length > 0

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => {
              return <CartItem
                key={product.id}
                product={product}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity} 
              />
            })
          }
        </ul>
        {!existProductsInCart && <p style={{paddingTop:'20px'}}>No hay productos en el carrito</p>}
      </aside>
    </>
  )
}
