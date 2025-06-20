import styles from './ScrollToTopIcon.module.css';
import { LuArrowBigUp } from "react-icons/lu";

const ScrollToTopIcon: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={styles.scrollToTop} onClick={scrollToTop} aria-label="Subir al inicio">
      <LuArrowBigUp />
    </button>
  );
};

export default ScrollToTopIcon;
