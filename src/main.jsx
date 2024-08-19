import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FilterProvider from './context/FilterProvider.jsx'
import './index.css'
import CartProvider from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </StrictMode>,
)
