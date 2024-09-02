import { useId } from "react"
import { products as productsCategories } from '../data/products.json'
import { useFilterContext } from "../hooks/useFilterContext"
import { formatCurrency } from "../utils/formatCurrency"


export const Filters = () => {

  const { filters, setFilters } = useFilterContext()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const uniqueCategories = () => productsCategories.map(category => category.category)

  // uso set para tener un arreglo de valores únicos
  const categories = [...new Set(uniqueCategories())]
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="space-y-2 mt-5">
      <div className="flex items-center space-x-2">
        <label htmlFor={minPriceFilterId} className="text-[rgb(56 56 56) text-lg font-bold">Price</label>
        <input
          type="range"
          name="price"
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        /> 
        <span className="text-[rgb(56 56 56) text-lg font-bold">{formatCurrency(filters.minPrice)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor={categoryFilterId} className="text-[rgb(56 56 56) text-lg font-bold">Category</label>
        <select
          name="category"
          id={categoryFilterId}
          className="w-72 p-2 rounded-lg bg-blue-400 border-2 border-slate-50 text-[rgb(56 56 56)"
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
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
