import { Cart } from "../cart/cart";
import { ProductCard } from "../product-card/product-card";
import classes from "./product-page.module.scss";
import { useProductContext } from "../../hooks/use-product-context.js";

export const ProductPage: React.FC = () => {
  const { products, loading, error } = useProductContext();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <main className={classes.pageLayout}>
      <section className={classes.sectionLayout}>
        <h1>Desserts</h1>
        <div className={classes.cardsLayout}>
          {products.map((product, i) => {
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
      <Cart />
    </main>
  );
};
