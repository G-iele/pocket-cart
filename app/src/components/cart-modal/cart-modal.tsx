import { createPortal } from "react-dom";

import classes from "./cart-modal.module.scss";
import { Cart } from "../cart/cart";
import { Icon } from "../icon/icon";
import RemoveIcon from "./icon-remove-item.svg";

type CartModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export const CartModal: React.FC<CartModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return createPortal(
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
      className={classes.layout}
    >
      <button onClick={closeModal} aria-label="Close cart">
        <Icon icon={<RemoveIcon />} size="sm" />
      </button>
      <Cart />
    </aside>,
    document.body,
  );
};
