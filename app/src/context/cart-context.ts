import { createContext } from "react";
import { Product } from "./products-context";

export type ReservedProduct = {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type CartContextProps = {
  reservedProducts: ReservedProduct[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  openCartModal: () => void;
  closeCartModal: () => void;
};

export const CartContext = createContext<CartContextProps>({
  reservedProducts: [],
  addItem: () => {
    throw new Error("No Cart context given");
  },
  removeItem: () => {
    throw new Error("No Cart context given");
  },
  openCartModal: () => {
    throw new Error("No Cart context given");
  },
  closeCartModal: () => {
    throw new Error("No Cart context given");
  },
});
