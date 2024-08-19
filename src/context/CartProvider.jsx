import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const MAX_ITEMS = 5
const MIN_ITEMS = 1

const initialCart = () => {
  const localStorageCart = localStorage.getItem("shoppingCart")
  return localStorageCart ? JSON.parse(localStorageCart) : []
}

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart)

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (item) => {
    // busco si existe en el carrito
    const itemExists = cart.findIndex(product => item.id === product.id)
    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)

    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  const cleanCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      decreaseQuantity,
      increaseQuantity,
      cleanCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;