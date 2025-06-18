import styles from "./MobileNavbar.module.css";
import {  NavLink } from "react-router-dom";
import { LuHouse, LuHeart, LuEllipsisVertical } from "react-icons/lu";


// 1. Define el tipo para los ítems del menú
type NavItem = {
  key: string;                 // Identificador único
  label: string;               // Texto descriptivo (puedes ocultarlo en mobile)
  icon: React.ReactNode;       // El icono a mostrar
  to?: string;
  onClick?: () => void;        // (Opcional) Acción al pulsar
};


// 2. Crea el array de ítems del menú
const navItems: NavItem[] = [
  {
    key: "home",
    label: "Inicio",
    icon: <span role="svg" aria-label="Inicio"><LuHouse /></span>,
    to: "/",
  },
  /*{
    key: "filter",
    label: "Filtro",
    icon: <span role="svg" aria-label="Filtrar"><LuSlidersHorizontal /></span>,
    to: "/filtros"
  },*/
  {
    key: "favorites",
    label: "Favoritos",
    icon: <span role="svg" aria-label="Favoritos"><LuHeart /></span>,
    to: "/favoritos"
  },
  {
    key: "moreops",
    label: "Más",
    icon: <span role="imsvgg" aria-label="Más opciones"><LuEllipsisVertical /></span>,
  },
];


// 3. Crea el componente Navbar
const MobileNavbar: React.FC = () => {

  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => item.to ? (
        <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
            aria-label={item.label}
          >
            {item.icon}
            <span className={styles.label}>{item.label}</span>
          </NavLink>
        ) : (
          <button
            key={item.key}
            className={styles.navItem}
            onClick={item.onClick}
            aria-label={item.label}
            type="button"
          >
            {item.icon}
            <span className={styles.label}>{item.label}</span>
          </button>
        )
      )}
    </nav>
  );
};

export default MobileNavbar;
