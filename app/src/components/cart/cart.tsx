import { useMediaQuery } from "react-responsive";
import { CartItem } from "../../context/cart-context";
import classes from "./cart.module.scss";

import EmptyCart from "./illustration-empty-cart.svg";

type CartProps = {
  items: CartItem[];
};

export const Cart = ({ items }: CartProps) => {
  const isMobile = useMediaQuery({ maxWidth: 425 });

  const className = isMobile ? `${classes.layout} ${classes.mobileHidden}` : classes.layout;

  return (
    <div className={className}>
      {items.length === 0 ? (
        <>
          <h2>Your Cart (0)</h2>
          <div className={classes.image}>
            <EmptyCart />
          </div>
          <span className={classes.description}>Your added items will appear here</span>
        </>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>
              {item.quantity} ${item.unitPrice}
            </p>
          </div>
        ))
      )}
    </div>
  );
};
