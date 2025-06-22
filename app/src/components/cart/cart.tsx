import classes from "./cart.module.scss";

import EmptyCart from "./illustration-empty-cart.svg";
import Carbon from "./icon-carbon-neutral.svg";
import { useCartContext } from "../../hooks/use-cart-context";
import { CartItem } from "../cart-item/cart-item";
import { formatUSD } from "../../utils/format-usd";
import { Icon } from "../icon/icon";

export const Cart = () => {
  const { reservedProducts, removeItem, confirmOrder } = useCartContext();

  return (
    <div className={classes.layout}>
      <h2>
        Your Cart ({reservedProducts.reduce((total, product) => total + product.quantity, 0)})
      </h2>
      {reservedProducts.length > 0 ? (
        <>
          {reservedProducts.map((product) => (
            <CartItem key={product.id} reservedProduct={product} removeItem={removeItem} />
          ))}
          <div className={classes.totalLayout}>
            <div className={classes.totalTitle}>Order Total</div>
            <div className={classes.totalPrice}>
              {formatUSD(
                reservedProducts.reduce((total, product) => total + product.totalPrice, 0),
              )}
            </div>
          </div>
          <div className={classes.carbon}>
            <Icon icon={<Carbon />} size="md" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button onClick={confirmOrder} className={classes.confirmButton}>
            Confirm Order
          </button>
        </>
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
