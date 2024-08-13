import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShoppingCartProvider from './context/ShoppinCartProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </StrictMode>,
)
