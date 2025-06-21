import classes from "./product-card.module.scss";
import AddCart from "./icon-add-to-cart.svg";
import HeartFilled from "./heart-filled.svg";
import { Icon } from "../icon/icon";
import { useFavoritesContext } from "../../hooks/use-favorites-context";
import { useCartContext } from "../../hooks/use-cart-context";
import { Product } from "../../context/products-context";
import { formatUSD } from "../../utils/format-usd";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const { addItem } = useCartContext();

  const { image, category, name, price } = product;

  const favoriteProduct = isFavorite(name);

  return (
    <div className={classes.layout}>
      <img src={image} alt={name} />
      <button
        className={classes.favorite}
        onClick={() => toggleFavorite(name)}
        aria-label="Toggle favorite"
      >
        <Icon icon={<HeartFilled />} size="md" color={favoriteProduct ? "active" : "default"} />
      </button>

      <button className={classes.addToCart} onClick={() => addItem(product)}>
        <AddCart />
        <span>Add to Cart</span>
      </button>

      <span className={classes.category}>{category}</span>
      <h3>{name}</h3>
      <span className={classes.price}>{formatUSD(price)}</span>
    </div>
  );
};
