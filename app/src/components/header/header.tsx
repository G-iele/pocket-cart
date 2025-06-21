import Logo from "./logo.svg";
import Heart from "./heart.svg";
import Cart from "./cart.svg";
import { useMediaQuery } from "react-responsive";

import classes from "./header.module.scss";
import { useCartContext } from "../../hooks/use-cart-context";
import { Icon } from "../icon/icon";
import { useFavoritesContext } from "../../hooks/use-favorites-context";

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 425 });
  const { openCartModal } = useCartContext();
  const { setShowFavorites } = useFavoritesContext();

  return (
    <header className={classes.header}>
      <a href="/pocket-cart/">
        <Logo />
      </a>

      <div className={classes.actions}>
        <button onClick={() => setShowFavorites(true)}>
          <Icon icon={<Heart />} size={"lg"} />
        </button>

        {isMobile && (
          <button onClick={openCartModal}>
            <Icon icon={<Cart />} size={"lg"} />
          </button>
        )}
      </div>
    </header>
  );
};
