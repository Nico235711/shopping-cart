import { createContext, useEffect, useState } from "react";
import { products as initialProducts } from '../data/products.json';

const initialCart = () => {
  const locaStorageCart = localStorage.getItem("shopping-cart")
  return locaStorageCart ? JSON.parse(localStorage.getItem("shopping-cart")) : []
}

export const ShoppingCart = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [products] = useState(initialProducts)
  const [cart, setCart] = useState(initialCart)

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 50
  })
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart))
  }, [cart]);

  const MAX_ITEMS = 5

  const filterProducts = (products) => {

    return products.filter(product => {
      return product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    })
  }
  const filteredProducts = filterProducts(products)
  const addToCart = (product) => {
    const itemExists = cart.findIndex(item => item.id === product.id)
    if (itemExists >= 0) {
      if (cart[itemExists].quantity < MAX_ITEMS) {
        const updatedCart = [...cart] // para no modificar el state original
        updatedCart[itemExists].quantity++
        setCart(updatedCart)
      }
    } else {
      product.quantity = 1
      setCart([...cart, product])
    }
  }

  const cleanCart = () => {
    setCart([])
  }

  return (
    <ShoppingCart.Provider value={{
      filters,
      setFilters,
      filteredProducts,
      cart,
      addToCart,
      cleanCart
    }}>
      {children}
    </ShoppingCart.Provider>
  );
}

export default ShoppingCartProvider;