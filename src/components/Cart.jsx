import { useId, useState } from "react"
import { CartIcon } from "./Icons"
import { useShoppingCartContext } from "../hooks/useShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

export const Cart = () => {

  const cartCheckboxId = useId()
  const [isChecked, setIsChecked] = useState(false);
  const { cart, cleanCart } = useShoppingCartContext()

  const handleCleanCart = () => {
    setIsChecked(false)
    cleanCart()
  }

  return (
    <>
      <label
        htmlFor={cartCheckboxId}
        className="absolute top-5 right-5 bg-blue-300 p-5 rounded-full cursor-pointer hover:scale-105 transition-all z-[9999]"
      >
        <CartIcon />
      </label>
      <input
        type="checkbox"
        name="cart"
        id={cartCheckboxId}
        hidden
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      <aside className={`cart transition-all ${isChecked ? 'h-full block' : 'h-0 hidden'} fixed top-0 right-0 w-96 bg-black p-8 overflow-y-scroll`}>
        <ul className="space-y-5">
          {
            cart.map(product => (
              <li
                key={product.id}
                className="border-2 rounded-lg flex flex-col justify-center items-center"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width={200}
                />
                <div className="space-y-3">
                  <h2 className="text-xl w-60 font-bold text-white">{product.title}</h2>
                  <p className="text-lg font-bold text-white">{formatCurrency(product.price)}</p>
                  <div className="flex gap-3 text-white text-lg font-bold">
                    <button
                      type="button"
                      className="bg-blue-700 py-1 px-2 rounded-lg mb-5"
                    >+</button>
                    <p>x{product.quantity}</p>
                    <button
                      type="button"
                      className="bg-red-700 py-1 px-2 rounded-lg mb-5"
                    >-</button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>

        <footer>
          <button
            type="button"
            className="border-2 text-white text-lg my-5 py-1 px-3 w-full rounded-lg hover:bg-blue-400 hover:opacity-70 transition-all"
            onClick={handleCleanCart}
          >Clean Cart</button>
        </footer>
      </aside>
    </>
  )
}
