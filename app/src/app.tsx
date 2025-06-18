import { ReactElement, useState } from "react";
import "./app.scss";
import { Header } from "./components/header/header";
import { ProductPage } from "./components/product-page/product-page";
import { CartProvider } from "./providers/cart-provider";
import { ProductsProvider } from "./providers/products-provider";

export function App(): ReactElement {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <ProductPage />
      </CartProvider>
    </ProductsProvider>
  );
}
