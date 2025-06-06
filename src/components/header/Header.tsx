import { useScrollDirection } from "../../hooks/useScrollDirection";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`${styles.header} ${scrollDirection === "down" ? styles.hide : ""}`}>
      <Link to="/">
        <img src="./src/assets/Logo.svg" alt="Logo CheckMyLift" className={styles.logo} />
      </Link>
    </header>
  );
}

export default Header;
