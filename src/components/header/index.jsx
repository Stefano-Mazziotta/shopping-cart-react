import { Filters } from "../filters"
import './style.css'

export function Header() {
    return (
        <header>
            <h1 className="title">Shopping Cart 🛒</h1>
            <Filters />
        </header>
    )
}