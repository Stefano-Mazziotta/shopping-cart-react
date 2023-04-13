import './style.css'
import { useFilters } from '../../hooks/useFilters'
import { useId } from 'react'

export function Filters () {
  const { filters, updateFilters } = useFilters()

  const minimumPriceInputId = useId()
  const categoryInputId = useId()

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value
    const newFilters = { ...filters, minPrice: newMinPrice }
    updateFilters(newFilters)
  }

  const handleChangeCategory = (event) => {
    const newCategory = event.target.value
    const newFilters = { ...filters, category: newCategory }
    updateFilters(newFilters)
  }

  return (
    <section className='filters-container'>
      <div className='input-wrap'>
        <label htmlFor={minimumPriceInputId}>Minimum price</label>
        <input type='range' id={minimumPriceInputId} min='0' max='3000' onChange={handleChangeMinPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div className='input-wrap'>
        <label htmlFor={categoryInputId}>Category</label>
        <select id={categoryInputId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
