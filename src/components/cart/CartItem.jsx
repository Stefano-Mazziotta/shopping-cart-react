export function CartItem ({ product, incrementQuantity, decrementQuantity }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.description} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>
          quantity: {product.quantity}
        </small>
        <button onClick={() => { decrementQuantity(product) }}>-</button>
        <button onClick={() => { incrementQuantity(product) }}>+</button>
      </footer>
    </li>
  )
}
