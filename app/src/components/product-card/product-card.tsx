import classes from "./product-card.module.scss";
import AddCart from "./icon-add-to-cart.svg";

type ProductCardProps = {
  img: string;
  category: string;
  name: string;
  price: number;
};

export const ProductCard: React.FC<ProductCardProps> = ({ img, category, name, price }) => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={classes.layout}>
      <img src={img} alt={name} />

      <button className={classes.buttonAddToCart}>
        <AddCart />
        <span>Add to Cart</span>
      </button>

      <span className={classes.category}>{category}</span>
      <h3 className={classes.title}>{name}</h3>
      <span className={classes.price}>{currency.format(price)}</span>
    </div>
  );
};
