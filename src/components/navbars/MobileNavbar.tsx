import styles from "./MobileNavbar.module.css";
import { useState } from "react";
import { LuHouse, LuMap, LuSlidersHorizontal, LuHeart, LuEllipsisVertical } from "react-icons/lu";


// 1. Define el tipo para los ítems del menú
type NavItem = {
  key: string;                 // Identificador único
  label: string;               // Texto descriptivo (puedes ocultarlo en mobile)
  icon: React.ReactNode;       // El icono a mostrar
  onClick?: () => void;        // (Opcional) Acción al pulsar
};


// 2. Crea el array de ítems del menú
const navItems: NavItem[] = [
  {
    key: "home",
    label: "Inicio",
    icon: <span role="svg" aria-label="Inicio"><LuHouse /></span>,
  },
  {
    key: "map",
    label: "Mapa",
    icon: <span role="svg" aria-label="Mapa"><LuMap /></span>,
  },
  {
    key: "filter",
    label: "Filtro",
    icon: <span role="svg" aria-label="Filtrar"><LuSlidersHorizontal /></span>,
  },
  {
    key: "favorites",
    label: "Favoritos",
    icon: <span role="svg" aria-label="Favoritos"><LuHeart /></span>,
  },
  {
    key: "moreops",
    label: "Más",
    icon: <span role="imsvgg" aria-label="Más opciones"><LuEllipsisVertical /></span>,
  },
];


// 3. Crea el componente Navbar
const MobileNavbar: React.FC = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => (
        <button
          key={item.key}
          className={`${styles.navItem} ${active === item.key ? styles.active : ""}`}
          onClick={() => {
            setActive(item.key);
            item.onClick?.();
          }}
          aria-label={item.label}
          type="button"
        >
          {item.icon}
          {/* Puedes ocultar el label en mobile si quieres solo iconos */}
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileNavbar;
