import { useCart } from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons'
import './style.css'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const existProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const isProductInCart = existProductInCart(product)
            return (
              <li key={product.id}>
                <div>
                  <img src={product.thumbnail} alt={product.description} />
                </div>
                <div>
                  <p><strong>{product.title}</strong> - ${product.price}</p>
                </div>
                <div>
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f'}} 
                    onClick={() => {
                      isProductInCart 
                        ? removeFromCart(product) 
                        : addToCart(product)
                    }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
