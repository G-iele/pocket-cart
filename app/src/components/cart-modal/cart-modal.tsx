import { CartItem } from "../../context/cart-context";
import { createPortal } from "react-dom";

import classes from "./cart-modal.module.scss";

type CartModalProps = {
  isOpen: boolean;
  items: CartItem[] | null;
  closeModal: () => void;
  removeItem: (id: CartItem["id"]) => void;
};

export const CartModal: React.FC<CartModalProps> = ({ isOpen, items, closeModal, removeItem }) => {
  if (!isOpen) return null;

  return createPortal(
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
      className={classes.layout}
    >
      <button onClick={closeModal} aria-label="Close cart">
        ✕
      </button>
      <h2 id="cart-heading">Cart</h2>
      {items ? (
        items?.map((item) => (
          <div key={item.id}>
            <div>
              <p>{item.title}</p>
              <p>
                {item.quantity} × ${item.unitPrice}
              </p>
            </div>
            <button onClick={() => removeItem(item.id)}>✕</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </aside>,
    document.body,
  );
};
