import { useState } from "react"
import { Products } from "./components/Products"
import { products } from './data/products.json'
import { Header } from "./components/Header"

function App() {

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })
  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    })
  }
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header products={filteredProducts} setFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
