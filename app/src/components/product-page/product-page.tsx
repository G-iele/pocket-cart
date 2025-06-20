import { Cart } from "../cart/cart";
import { ProductCard } from "../product-card/product-card";
import classes from "./product-page.module.scss";
import { useProductContext } from "../../hooks/use-product-context.js";
import { useFavoritesContext } from "../../hooks/use-favorites-context.js";

export const ProductPage: React.FC = () => {
  const { products, loading, error } = useProductContext();
  const { showFavorites, favoriteIds } = useFavoritesContext();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  const visibleProducts = showFavorites
    ? products.filter((product) => favoriteIds.includes(product.id))
    : products;

  return (
    <main className={classes.pageLayout}>
      <section className={classes.sectionLayout}>
        <h1>Desserts</h1>
        <div className={classes.cardsLayout}>
          {visibleProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
      <Cart />
    </main>
  );
};
