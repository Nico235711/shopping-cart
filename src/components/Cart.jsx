import { useEffect, useMemo, useState } from "react"
import { CartIcon } from "./Icons"
import { useCartContext } from "../hooks/useCartContext"
import { formatCurrency } from "../utils/formatCurrency"

export const Cart = () => {
  const [checked, setChecked] = useState(false)
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, cleanCart } = useCartContext()
  const isEmpty = useMemo(() => cart.length === 0, [cart])
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

  useEffect(() => {
    setChecked(false)
  }, [isEmpty]);

  return (
    <>
      <label
        className="absolute top-5 right-5 bg-outrageous-orange-200 rounded-full p-3 cursor-pointer z-[9999]"
        onClick={() => setChecked(!checked)}
      >
        <CartIcon />
      </label>

      <aside className={`${checked ? "block" : "hidden"} bg-black w-96 fixed top-0 right-0 h-full overflow-y-scroll scroll-bar-aside text-white`}>
        {
          isEmpty ? (
            <p className="text-center mt-20">El carrito esta vacío</p>
          ) : (
            <ul className="mt-20 mx-5 space-y-5">
              {
                cart.map(item => (
                  <li key={item.id} className="border-2 space-y-2 p-2 flex items-center justify-between">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                    <div>
                      <button
                        type="button"
                        className="text-xl float-end"
                        onClick={() => removeFromCart(item.id)}
                      >❌</button>
                      <h3 className="text-xl mb-3">{item.title}</h3>
                      <p className="text-lg">{formatCurrency(item.price)}</p>
                      <div className="flex justify-end items-center mt-5 gap-5">
                        <button
                          type="button"
                          className="bg-blue-600 rounded-full p-1"
                          onClick={() => increaseQuantity(item.id)}
                        >➕</button>
                        <p>Quantity: x{item.quantity}</p>
                        <button
                          type="button"
                          className="bg-red-600 rounded-full p-1"
                          onClick={() => decreaseQuantity(item.id)}
                        >➖</button>
                      </div>
                    </div>
                  </li>
                ))
              }
              <div className="flex justify-around items-center mt-5">
                <button type="button" className="border-2 px-2 py-1" onClick={cleanCart}>Clean Cart</button>
                <p>Total: <span className="text-lg text-blue-400">{formatCurrency(cartTotal)}</span></p>
              </div>
            </ul>
          )
        }
      </aside>
    </>
  )
}
