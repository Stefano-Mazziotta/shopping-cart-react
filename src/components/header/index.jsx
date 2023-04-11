import { Filters } from "../filters"
import './style.css'

export function Header({ filters, updateFilters }) {
    return (
        <header>
            <h1 className="title">Shopping Cart 🛒</h1>
            <Filters filters={filters} updateFilters={updateFilters}/>
        </header>
    )
}