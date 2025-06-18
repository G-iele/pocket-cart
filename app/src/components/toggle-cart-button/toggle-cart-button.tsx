import Cart from "./cart.svg";
import classes from "./toggle-cart-button.module.scss";

type ToggleCartButtonProps = {
  openCartModal: () => void;
};

export const ToggleCartButton: React.FC<ToggleCartButtonProps> = ({ openCartModal }) => {
  return (
    <button onClick={openCartModal} aria-label="Cart">
      <Cart />
    </button>
  );
};
