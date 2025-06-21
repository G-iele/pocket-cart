import { createContext } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

export type ProductsContextProps = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  loading: true,
  error: null,
});
