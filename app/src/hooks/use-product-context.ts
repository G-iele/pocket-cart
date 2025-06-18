import { useContext } from "react";
import { ProductsContext } from "../context/products-context";

export const useProductContext = () => {
  return useContext(ProductsContext);
};
