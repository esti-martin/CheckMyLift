import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => navigate(-1)}
      aria-label="Volver a la página anterior"
    >
      <span className={styles.icon} aria-hidden="true">
        <LuArrowLeft />
      </span>
      Volver
    </button>
  );
};

export default BackButton;
