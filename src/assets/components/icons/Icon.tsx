import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import styles from "./Icon.module.css"

type IconToggleProps = {
  active: boolean;
  onToggle: () => void;
  className?: string;
};

const HeartIcon: React.FC<IconToggleProps> = ({ active, onToggle, className = "" }) => (
  <button
    type="button"
    onClick={onToggle}
    className={`${styles.heartButton} ${className}`}
    aria-pressed={active}
  >
    <span
      className={`${styles.iconHeart} ${active ? styles.active : ""}`}
      role="svg"
      aria-label={active ? "Activo" : "Inactivo"}
    >
      {active ? <FaHeart /> : <LuHeart />}
    </span>
  </button>
);

<section>
    <LuHeart />
</section>

export default HeartIcon;