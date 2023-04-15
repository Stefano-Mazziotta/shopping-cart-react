import './style.css'
import { ProductItem } from './ProductItem'

export function Products ({ products }) {

  const existProducts = products.length > 0 

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => <ProductItem product={product} />)
        }
      </ul>
      {
        !existProducts && <p>No hay productos para mostrar</p>
      }
    </main>
  )
}
