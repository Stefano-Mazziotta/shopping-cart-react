import './style.css'

export function Products({ products }) {
  return (
    <main className='products'>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <div>
                <img src={product.thumbnail} alt={product.description} />
              </div>
              <div>
                <p><strong>{product.title}</strong> - ${product.price}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}