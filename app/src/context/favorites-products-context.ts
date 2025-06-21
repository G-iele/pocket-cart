import { createContext } from "react";

type FavoritesContextProps = {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  showFavorites: boolean;
  setShowFavorites: (show: boolean) => void;
};

export const FavoritesContext = createContext<FavoritesContextProps>({
  favoriteIds: [],
  toggleFavorite: () => {
    throw new Error("No Favorite product context given");
  },
  isFavorite: () => false,
  showFavorites: false,
  setShowFavorites: () => {
    throw new Error("No Favorite product context given");
  },
});
