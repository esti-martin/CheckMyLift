import { useEffect, useState } from "react";
import { useStations } from "../hooks/useStations";
import ElevatorCard from "../components/cards/ElevatorCard";
import styles from "./Favs.module.css";
import { getFavoritesFromStorage } from "../hooks/useFavorites"; 

const Favs: React.FC = () => {
    const { stations, loading } = useStations();

    const [favoriteCodes, setFavoriteCodes] = useState<string[]>(getFavoritesFromStorage());

    // Escucha cambios en localStorage (de otros tabs/ventanas)
    useEffect(() => {
        const onStorage = () => setFavoriteCodes(getFavoritesFromStorage());
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

   useEffect(() => {
    const updateFavorites = () => setFavoriteCodes(getFavoritesFromStorage());
    window.addEventListener("favoritesChanged", updateFavorites);
    window.addEventListener("storage", updateFavorites);
    return () => {
        window.removeEventListener("favoritesChanged", updateFavorites);
        window.removeEventListener("storage", updateFavorites);
    };
}, []);

    const favoriteStations = stations.filter(station => 
        favoriteCodes.includes(station.code)
    );

    if (loading) return <p>Cargando...</p>;

    // Si no hay estaciones favoritas y ya ha cargado
    if (!loading && favoriteStations.length === 0) {
        return (
            <section className={styles.containerFavs}>
                <section className={styles.error}>
                    <img src="/assets/stations/pagina-perdida.svg" alt="" aria-hidden="true"/>
                    <h3>¡Ups! ¡Aquí no hay nada!</h3>
                    <p>Guarda tu primer ascensor y ten acceso rápido y directo a él.</p>
                </section>
                
            </section>
        );
    }

    return (
        <section className={styles.containerFavs}>
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
