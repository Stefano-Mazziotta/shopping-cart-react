import { createContext, useState } from "react"

// Use this const for get value context.
export const FiltersContext = createContext(null)

// Provide access to context
export function FiltersProvider ({ children }) {
    
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 200
    })

    const updateFilters = (newFilters) => {
        setFilters(newFilters)
    }

    return (
        <FiltersContext.Provider value={{
                filters,
                updateFilters
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}