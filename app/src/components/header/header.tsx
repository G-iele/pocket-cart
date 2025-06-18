import Logo from "./logo.svg";
import { useMediaQuery } from "react-responsive";

import classes from "./header.module.scss";
import { ToggleCartButton } from "../toggle-cart-button/toggle-cart-button";
import { ToggleFavoritiesButton } from "../toggle-favorites-button/toggle-favorites-button";
import { useCartContext } from "../../hooks/use-cart-context";

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 425 });
  const { openCartModal } = useCartContext();

  return (
    <header className={classes.header}>
      <Logo />

      <div className={classes.actions}>
        <ToggleFavoritiesButton />
        {isMobile && <ToggleCartButton openCartModal={openCartModal} />}
      </div>
    </header>
  );
};
