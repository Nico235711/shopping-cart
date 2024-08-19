import { createContext, useState } from "react";
import { products as initialProducts } from '../data/products.json';

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [products] = useState(initialProducts)

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
    <FilterContext.Provider value={{
      filters,
      setFilters,
      filteredProducts
    }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;