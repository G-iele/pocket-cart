import Heart from "./heart.svg";
import classes from "./toggle-favorities-button.module.scss";

export const ToggleFavoritiesButton = () => {
  return (
    <button aria-label="Favorites">
      <Heart />
    </button>
  );
};
