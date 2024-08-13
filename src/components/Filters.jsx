import { useState } from "react"
import { formatCurrency } from "../utils/formatCurrency"


export const Filters = ({ products, setFilters }) => {

  const [minPrice, setMinPrice] = useState(0)
  const uniqueCategories = () => products.map(product => product.category)

  // uso set para tener un arreglo de valores únicos
  const categories = [...new Set(uniqueCategories())]
  const handleChange = (event) => {
    setFilters()
  }

  return (
    <section className="space-y-2 mt-5">
      <div className="flex items-center space-x-2">
        <label htmlFor="price" className="text-white text-lg font-bold">Price</label>
        <input
          type="range"
          name="price"
          id="price"
          min={0}
          max={1000}
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
        /> <span className="text-white text-lg font-bold"> - {formatCurrency(minPrice)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="category" className="text-white text-lg font-bold">Category</label>
        <select
          name="category"
          id="category"
          className="w-72 p-2 rounded-lg bg-blue-400 border-2 border-slate-50 text-white"
        >
          <option value="">All</option>
          {
            categories.map(category => (
              <option value={category} key={category}>{category}</option>
            ))
          }
        </select>
      </div>
    </section>
  )
}
