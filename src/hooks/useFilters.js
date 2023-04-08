import { useState } from "react"

export function useFilters() {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 200
    })

    const updateFilters = (newFilters) => {
        setFilters(newFilters)
    }

    const filterProducts = (products, filters) => {
        return products.filter(product => {
            return ('all' == filters.category || product.category == filters.category) &&
                (product.price >= filters.minPrice);
        })
    }

    return { filters, updateFilters, filterProducts }
}