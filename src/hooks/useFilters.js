import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters'

export function useFilters () {
  const { filters, updateFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (filters.category === 'all' || product.category === filters.category) &&
                (product.price >= filters.minPrice)
    })
  }

  return { filters, updateFilters, filterProducts }
}
