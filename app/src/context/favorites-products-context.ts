import { createContext } from "react";

type FavoritesContextProps = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  showFavorites: boolean;
  setShowFavorites: (show: boolean) => void;
};

export const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  toggleFavorite: () => {
    throw new Error("No Favorite product context given");
  },
  isFavorite: () => false,
  showFavorites: false,
  setShowFavorites: () => {
    throw new Error("No Favorite product context given");
  },
});
