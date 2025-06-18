import { ReactElement, useState } from "react";
import "./app.scss";
import { Header } from "./components/header/header";
import { ProductPage } from "./components/product-page/product-page";
import { CartProvider } from "./providers/cart-provider";

export function App(): ReactElement {
  return (
    <CartProvider>
      <Header />
      <ProductPage />
    </CartProvider>
  );
}
