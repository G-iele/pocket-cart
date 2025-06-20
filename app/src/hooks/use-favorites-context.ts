import { useContext } from "react";
import { FavoritesContext } from "../context/favorites-products-context";

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
