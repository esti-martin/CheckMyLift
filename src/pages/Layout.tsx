import { Outlet } from "react-router-dom";
import MobileNavbar from "../components/navbars/MobileNavbar";
import Header from "../components/header/Header";
import styles from "./Layout.module.css"

const Layout: React.FC = () => (
  <>
    <section>
      <Header/ >
    </section>
    
    <main>
      <Outlet /> {/* Aquí se renderizarán las páginas */}
    </main>
    <MobileNavbar />
  </>
);

export default Layout;