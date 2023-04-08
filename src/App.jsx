import { Products } from './components/products'
import { products } from './mocks/products.json'

export default function App() {
  return (
    <div className="App">
      <h2>Shopping Cart 🛒</h2>
      <Products products={products} />
    </div>
  )
}
