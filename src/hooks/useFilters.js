import { useState } from "react"
import { FiltersContext } from "../contexts/filters";
import { useContext } from "react";

export function useFilters() {
    
    const { filters, updateFilters } = useContext(FiltersContext) 

    const filterProducts = (products) => {
        return products.filter(product => {
            return ('all' == filters.category || product.category == filters.category) &&
                (product.price >= filters.minPrice);
        })
    }

    return { filters, updateFilters, filterProducts }
}