import { useCartContext } from "../hooks/useCartContext"
import { useFilterContext } from "../hooks/useFilterContext"
import { formatCurrency } from "../utils/formatCurrency"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"

export const Products = () => {

  const { filteredProducts } = useFilterContext()
  const { cart, addToCart, removeFromCart } = useCartContext()

  const checkProductInCart = (product) => cart.some(item => item.id === product.id)

  return (
    <main className="container mx-auto my-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {
          filteredProducts.map(product => {
            const isProductInCart = checkProductInCart(product)
            return (
              <li
                key={product.id}
                className="bg-slate-100 border-2 p-5 rounded-md shadow h-[508px]"
              >
                <img src={product.thumbnail} alt={product.title} />
                <div className="mt-10">
                  <h2 className="text-xl w-60 h-[56px] font-bold">{product.title}</h2>
                  <p className="text-lg my-2 font-bold">{formatCurrency(product.price)}</p>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className={`${isProductInCart ? "bg-red-600" : "bg-blue-600"} border-2 p-1 rounded-lg text-white`}
                    aria-label={`${isProductInCart ? "add item to cart" : "remove item from cart"}`}
                    onClick={() => isProductInCart ? removeFromCart(product.id) : addToCart(product)}
                  >
                    {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
