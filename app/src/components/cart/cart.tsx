import classes from "./cart.module.scss";

import EmptyCart from "./illustration-empty-cart.svg";
import { useCartContext } from "../../hooks/use-cart-context";
import { CartItem } from "../cart-item/cart-item";

export const Cart = () => {
  const { reservedProducts, removeItem } = useCartContext();

  return (
    <div className={classes.layout}>
      <h2>
        Your Cart ({reservedProducts.reduce((total, product) => total + product.quantity, 0)})
      </h2>
      {reservedProducts.length > 0 ? (
        reservedProducts.map((product) => (
          <CartItem key={product.id} reservedProduct={product} removeItem={removeItem} />
        ))
      ) : (
        <>
          <div className={classes.image}>
            <EmptyCart />
          </div>
          <span className={classes.description}>Your added items will appear here</span>
        </>
      )}
    </div>
  );
};
