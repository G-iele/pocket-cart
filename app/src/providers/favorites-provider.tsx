import { useEffect, useState } from "react";
import { FavoritesContext } from "../context/favorites-products-context";

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
  });

  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]));
  };

  const isFavorite = (id: number) => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        toggleFavorite,
        isFavorite,
        showFavorites,
        setShowFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
