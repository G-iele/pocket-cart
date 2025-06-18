import { createContext } from "react";

export type CartItem = {
  id: number;
  title: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type CartContextProps = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  openCartModal: () => void;
  closeCartModal: () => void;
};

export const CartContext = createContext<CartContextProps>({
  items: [],
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
