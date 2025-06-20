import classes from "./icon.module.scss";

type IconProps = {
  icon: React.ReactNode;
  size: string;
  color?: "default" | "active";
};

export const Icon: React.FC<IconProps> = ({ icon, size, color = "default" }) => {
  return <div className={`${classes.transition} ${classes[size]} ${classes[color]}`}>{icon}</div>;
};
