import { useEffect, useState } from "react";
import { useStations } from "../hooks/useStations";
import ElevatorCard from "../components/cards/ElevatorCard";
import styles from "./Favs.module.css";
import { getFavoritesFromStorage } from "../hooks/useFavorites"; 

const Favs: React.FC = () => {
  const { stations, loading } = useStations();
  const [favoriteCodes, setFavoriteCodes] = useState<string[]>([]);

  // Carga los favoritos al montar el componente
  useEffect(() => {
    const handleStorageChange = () => {
    setFavoriteCodes(getFavoritesFromStorage());
    };

    // Escucha cambios en localStorage
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // Filtra las estaciones favoritas
    const favoriteStations = stations.filter(station => 
        favoriteCodes.includes(station.code)
    );

    if (loading) return <p>Cargando...</p>;

    // Si no hay estaciones favoritas y ya ha cargado
    if (!loading && favoriteStations.length === 0) {
    return (
        <section className='containerFavs'>
            <section className={styles.error}>
                <img src="/assets/stations/pagina-perdida.svg" alt="" aria-hidden="true"/>
                <p>No tienes estaciones favoritas aún. ¡Empieza a marcar algunas!</p>
            </section>
            
        </section>
    );
    }

    return (
        <section className='containerFavs'>
            <section className={styles.cardContainer}>
                {favoriteStations.map(station => (
                <ElevatorCard
                    key={station.code}
                    code={station.code}
                    title={station.name}
                    line={station.line}
                    timeToNextStation={station.timeToNextStation}
                    warningType={station.issues ? "negative" : "positive"}
                />
                ))}
            </section>
        </section>
    );
};

export default Favs;
