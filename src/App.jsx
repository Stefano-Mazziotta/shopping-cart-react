import { products as productsData} from './mocks/products.json'

import { Header } from './components/header'
import { Products } from './components/products'

import { useFilters } from './hooks/useFilters'

export default function App() {
  const { filters, updateFilters, filterProducts } = useFilters()
  const productsFiltered = filterProducts(productsData, filters)

  return (
    <div className="App">
      <Header filters={filters} updateFilters={updateFilters} />
      <Products products={productsFiltered} />
    </div>
  )
}
