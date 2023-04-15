import './style.css'
import { ProductItem } from './ProductItem'

export function Products ({ products }) {

  const existProducts = products.length > 0 

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            return (
              <ProductItem 
                key={product.id}
                product={product}
              />
            )
          })
        }
      </ul>
      {
        !existProducts && <p>No hay productos para mostrar</p>
      }
    </main>
  )
}
