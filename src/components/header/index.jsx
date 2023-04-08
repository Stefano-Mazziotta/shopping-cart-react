import { Filters } from "../filters"

export function Header({ filters, updateFilters }) {
    return (
        <header>
            <h1>Shopping Cart 🛒</h1>
            <Filters filters={filters} updateFilters={updateFilters}/>
        </header>
    )
}