import { useMediaQuery } from "react-responsive";
import { CartItem } from "../../context/cart-context";
import classes from "./cart.module.scss";

import EmptyCart from "./illustration-empty-cart.svg";

export const Cart = () => {
  const isMobile = useMediaQuery({ maxWidth: 425 });

  const className = isMobile ? `${classes.layout} ${classes.mobileHidden}` : classes.layout;

  return (
    <div className={className}>
      <h2>Your Cart (0)</h2>
      <div className={classes.image}>
        <EmptyCart />
      </div>
      <span className={classes.description}>Your added items will appear here</span>
    </div>
  );
};
