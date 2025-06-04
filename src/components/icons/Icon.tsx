import React, { useEffect, useState } from "react";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import styles from "./Icon.module.css"

type HeartIconProps = {
  id: string; // ID único de la card
  className?: string;
};

const FAVORITES_KEY = "myAppFavorites";

function getFavoritesFromStorage(): string[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveFavoritesToStorage(favorites: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

const HeartIcon: React.FC<HeartIconProps> = ({ id, className = "" }) => {
  const [active, setActive] = useState(false);

  // Al montar, lee el estado desde localStorage
  useEffect(() => {
    const favorites = getFavoritesFromStorage();
    setActive(favorites.includes(id));
  }, [id]);

  // Al cambiar active, actualiza localStorage
  useEffect(() => {
    const favorites = getFavoritesFromStorage();
    if (active && !favorites.includes(id)) {
      saveFavoritesToStorage([...favorites, id]);
    } else if (!active && favorites.includes(id)) {
      saveFavoritesToStorage(favorites.filter(favId => favId !== id));
    }
  }, [active, id]);

  const toggle = () => setActive(a => !a);

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