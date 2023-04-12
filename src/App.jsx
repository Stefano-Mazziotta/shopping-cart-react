import { products as productsData } from './mocks/products.json'

import { Header } from './components/header'
import { Products } from './components/products'

import { useFilters } from './hooks/useFilters'

export default function App () {
  const { filterProducts } = useFilters()
  const productsFiltered = filterProducts(productsData)

  return (
    <div className='App'>
      <Header />
      <Products products={productsFiltered} />
    </div>
  )
}
