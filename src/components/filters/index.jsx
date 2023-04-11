import './style.css'

export function Filters({ filters, updateFilters }) {

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
        <label htmlFor="minprice">Minimum price</label>
        <input type="range" name="minprice" id="minprice" min="0" max="3000" onChange={handleChangeMinPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div className='input-wrap'>
        <label htmlFor="category">Category</label>
        <select name="category" id="" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}