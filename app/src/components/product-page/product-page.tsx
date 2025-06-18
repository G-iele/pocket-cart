import { useCartContext } from "../../hooks/use-cart-context";
import { Cart } from "../cart/cart";
import { ProductCard } from "../product-card/product-card";
import classes from "./product-page.module.scss";
import { data } from "../../../data.js";

export const ProductPage: React.FC = () => {
  const { items } = useCartContext();

  return (
    <main className={classes.pageLayout}>
      <section className={classes.sectionLayout}>
        <h1>Desserts</h1>
        <div className={classes.cardsLayout}>
          {data.map((product, i) => {
            return (
              <ProductCard
                key={product.name + i}
                img={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      </section>
      <Cart items={items} />
    </main>
  );
};
