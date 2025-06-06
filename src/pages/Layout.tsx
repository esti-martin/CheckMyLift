import { Link, Outlet } from "react-router-dom";
import MobileNavbar from "../components/navbars/MobileNavbar";
import styles from "./Layout.module.css"

const Layout: React.FC = () => (
  <>
    <header>
      <Link to="/">
        <img src="./src/assets/Logo.svg" alt="Logo CheckMyLift" className={styles.logo} />
      </Link>
    </header>
    <main>
      <Outlet /> {/* Aquí se renderizarán las páginas */}
    </main>
    <MobileNavbar />
  </>
);

export default Layout;