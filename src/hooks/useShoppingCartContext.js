import { useContext } from "react";
import { ShoppingCart } from "../context/ShoppinCartProvider";

export const useShoppingCartContext = () => useContext(ShoppingCart)