import { ReservedProduct } from "../../context/cart-context";
import { formatUSD } from "../../utils/format-usd";
import RemoveIcon from "./icon-remove-item.svg";

import classes from "./cart-item.module.scss";
import { Icon } from "../icon/icon";

type CartItemProps = {
  reservedProduct: ReservedProduct;
  removeItem: (id: number) => void;
};

export const CartItem: React.FC<CartItemProps> = ({ reservedProduct, removeItem }) => {
  const { id, name, quantity, unitPrice, totalPrice } = reservedProduct;

  return (
    <div className={classes.cartItemLayout}>
      <div className={classes.productLayout}>
        <h4>{name}</h4>
        <div className={classes.priceLayout}>
          <div className={classes.quantity}>{quantity}x</div>
          <div className={classes.unitPrice}>@ {formatUSD(unitPrice)}</div>
          <div className={classes.totalPrice}>@ {formatUSD(totalPrice)}</div>
        </div>
      </div>
      <button onClick={() => removeItem(id)} aria-label="Remove items">
        <Icon icon={<RemoveIcon />} size="sm" />
      </button>
    </div>
  );
};
