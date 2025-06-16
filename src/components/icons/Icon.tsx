import React, { useEffect, useState } from "react";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import styles from "./Icon.module.css";
import { getFavoritesFromStorage, saveFavoritesToStorage } from "../../hooks/useFavorites";

type HeartIconProps = {
  id: string; // ID único de la card
  className?: string;
};


const HeartIcon: React.FC<HeartIconProps> = ({ id, className = "" }) => {
  const [active, setActive] = useState(false);

  // Al montar y cuando cambian los favoritos globalmente
  useEffect(() => {
    const updateActive = () => {
      const favorites = getFavoritesFromStorage();
      setActive(favorites.includes(id));
    };
    updateActive(); // Inicial
    window.addEventListener("favoritesChanged", updateActive);
    window.addEventListener("storage", updateActive);
    return () => {
      window.removeEventListener("favoritesChanged", updateActive);
      window.removeEventListener("storage", updateActive);
    };
  }, [id]);


 // Guarda en localStorage solo cuando el usuario hace clic
  const toggle = () => {
    const favorites = getFavoritesFromStorage();
    let newFavorites;
    if (favorites.includes(id)) {
      newFavorites = favorites.filter(favId => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    saveFavoritesToStorage(newFavorites);
    window.dispatchEvent(new Event("favoritesChanged"));
    // El estado se actualizará automáticamente por el useEffect de arriba
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${styles.heartButton} ${className}`}
      aria-pressed={active}
      aria-label={active ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      <span
        className={`${styles.iconHeart} ${active ? styles.active : ""}`}
        role="img"
      >
        {active ? <FaHeart /> : <LuHeart />}
      </span>
    </button>
  );
};


export default HeartIcon;