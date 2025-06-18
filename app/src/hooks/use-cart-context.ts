import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const useCartContext = () => {
  return useContext(CartContext);
};
