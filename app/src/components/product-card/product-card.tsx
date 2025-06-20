import classes from "./product-card.module.scss";
import AddCart from "./icon-add-to-cart.svg";
import HeartFilled from "./heart-filled.svg";
import { Icon } from "../icon/icon";
import { useFavoritesContext } from "../../hooks/use-favorites-context";

type ProductCardProps = {
  img: string;
  category: string;
  name: string;
  price: number;
};

export const ProductCard: React.FC<ProductCardProps> = ({ img, category, name, price }) => {
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const favoriteProduct = isFavorite(name);

  return (
    <div className={classes.layout}>
      <img src={img} alt={name} />
      <button
        className={classes.favorite}
        onClick={() => toggleFavorite(name)}
        aria-label="Toggle favorite"
      >
        <Icon icon={<HeartFilled />} size="md" color={favoriteProduct ? "active" : "default"} />
      </button>

      <button className={classes.addToCart}>
        <AddCart />
        <span>Add to Cart</span>
      </button>

      <span className={classes.category}>{category}</span>
      <h3 className={classes.title}>{name}</h3>
      <span className={classes.price}>{currency.format(price)}</span>
    </div>
  );
};
