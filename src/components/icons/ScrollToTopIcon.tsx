import { useState, useEffect } from 'react';
import styles from './ScrollToTopIcon.module.css';
import { LuArrowBigUp } from "react-icons/lu";

const ScrollToTopIcon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Subir al inicio"
    >
      <LuArrowBigUp />
    </button>
  );
};

export default ScrollToTopIcon;
