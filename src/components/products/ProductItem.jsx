import { useCart } from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons'

export function ProductItem({ product }) {

    const { cart, addToCart, removeFromCart } = useCart()

    const existProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    const handleClickActionCart = (isProductInCart, product) => {
        if (isProductInCart) {
            removeFromCart(product)
            return;
        }

        addToCart(product)
    }

    const isProductInCart = existProductInCart(product)
    const classActionCartButton = isProductInCart ? 'remove-from-cart' : 'add-to-cart'

    return (
        <li>
            <div>
                <img src={product.thumbnail} alt={product.description} />
            </div>
            <div>
                <p><strong>{product.title}</strong> - ${product.price}</p>
            </div>
            <div>
                <button
                    className={classActionCartButton}
                    onClick={() => handleClickActionCart(isProductInCart, product)}
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
}