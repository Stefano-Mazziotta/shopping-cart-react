import './style.css'
import { useId } from 'react'

import { CartIcon } from '../icons'
import { useCart } from '../../hooks/useCart'

export function Cart() {
  const { cart, decrementQuantity, incrementQuantity } = useCart()

  const cartCheckboxId = useId()

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

              return (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.description} />
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <footer>
                    <small>
                      quantity: {product.quantity}
                    </small>
                    <button onClick={() => {decrementQuantity(product)}}>-</button>
                    <button onClick={() => {incrementQuantity(product)}}>+</button>
                  </footer>
                </li>
              )
            })
          }
        </ul>
      </aside>
    </>
  )
}
